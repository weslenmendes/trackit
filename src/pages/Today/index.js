import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { api } from "./../../services/api";

import { getToday } from "./../../utils/day.mjs";

import { UserContext } from "../../contexts/UserContext";
import { TodayHabitCard } from "../../components/TodayHabitCard";
import { useHabits } from "../../hooks/useHabits";

const Today = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);
  const { updateHabits } = useHabits();

  useEffect(() => {
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
          setData(data);
          updateHabits(data);
        } catch (e) {
          alert(e);
        }
      })();
    }
  }, [user, updateHabits]);

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

  return (
    <Container>
      <Title>{getToday()}</Title>
      <SubTitle>Nenhum hábito concluído ainda</SubTitle>
      {data.length === 0 && <h2>Carregando</h2>}
      {data.length > 0 && (
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

const Container = styled.section`
  min-width: 350px;
  height: calc(100vh - 75px);
  margin-top: 75px;
  padding: 28px 18px 0px;
  background-color: #f2f2f2;
`;

const Title = styled.h2`
  font-size: 23px;
  line-height: 29px;
  font-weight: 400px;
  color: #126ba5;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #bababa;
  line-height: 22px;
`;

const HabitsContainer = styled.main`
  margin-top: 28px;
`;

export { Today };
