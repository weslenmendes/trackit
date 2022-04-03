import { useContext, useEffect } from "react";

import { UserContext } from "../contexts/UserContext";

import { api } from "../services/api";

const useHabits = () => {
  const { user, habitsInfo, setHabitsInfo } = useContext(UserContext);

  useEffect(() => {
    let isCancelled = false;

    if (user && setHabitsInfo && !isCancelled) {
      getTodayHabits();
    }

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function getTodayHabits() {
    const URL = "habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const response = api.get(URL, config);
    response
      .then(({ data }) => {
        updateHabitsInfo(data);
      })
      .catch((e) => alert(e));
  }

  function updateHabitsInfo(data) {
    const done = data.filter((habit) => habit.done);
    const newState = {
      todayTotalHabits: data.length,
      todayTotalHabitsCompleted: done.length,
      percentage: Math.floor(100 * (done.length / data.length)),
    };
    setHabitsInfo(newState);
  }

  function updateHabits(data) {
    if (data) {
      updateHabitsInfo(data);
    } else {
      getTodayHabits();
    }
  }

  return { habitsInfo, updateHabits };
};

export { useHabits };
