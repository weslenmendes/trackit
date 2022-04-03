import { useState, useEffect, useContext } from "react";

import { TodayHabitCard } from "../../components/TodayHabitCard";
import { Loading } from "../../components/Loading";

import { Container, Title, SubTitle, HabitsContainer } from "./styled";

import { UserContext } from "../../contexts/UserContext";
import { useHabits } from "../../hooks/useHabits";

import { api } from "./../../services/api";

import { getToday } from "./../../utils/day.mjs";

const Today = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, habitsInfo } = useContext(UserContext);
  const { updateHabits } = useHabits();

  useEffect(() => {
    let isCancelled = false;

    if (user) {
      (async function () {
        const URL = "habits/today";
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        try {
          const { data } = await api.get(URL, config);
          setIsLoading(false);
          if (!isCancelled) {
            setData(data);
            updateHabits(data);
          }
        } catch (e) {
          setIsLoading(false);
          alert(e);
        }
      })();
    }

    return () => {
      isCancelled = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getTodayHabits = () => {
    const URL = "habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const response = api.get(URL, config);
    response
      .then(({ data }) => {
        setData(data);
        updateHabits(data);
      })
      .catch((e) => alert(e));
  };

  const checkHabit = (id) => {
    if (id) {
      const URL = `habits/${id}/check`;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = api.post(URL, null, config);

      promise.then(() => getTodayHabits()).catch((e) => alert(e));
    }
  };

  const uncheckHabit = (id) => {
    if (id) {
      const URL = `habits/${id}/uncheck`;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = api.post(URL, null, config);

      promise.then(() => getTodayHabits()).catch((e) => alert(e));
    }
  };

  const makeSubtitle = () => {
    const { percentage } = habitsInfo;

    if (data.length && percentage > 0) {
      return (
        <SubTitle className="highlighted">
          {percentage}% dos hábitos concluídos
        </SubTitle>
      );
    } else {
      return <SubTitle>Nenhum hábito concluído ainda</SubTitle>;
    }
  };

  return (
    <Container>
      <Title>{getToday()}</Title>
      {makeSubtitle()}
      {isLoading && <Loading />}
      {data.length > 0 && !isLoading && (
        <HabitsContainer>
          {data.map((habit) => (
            <TodayHabitCard
              key={habit.id}
              habit={habit}
              checkHabit={checkHabit}
              uncheckHabit={uncheckHabit}
            />
          ))}
        </HabitsContainer>
      )}
    </Container>
  );
};

export { Today };
