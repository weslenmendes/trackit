import { useState, useEffect, useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";

import { Container } from "./styled";

import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { CreateHabit } from "../../components/CreateHabit";
import { HabitCard } from "../../components/HabitCard";
import { Loading } from "../../components/Loading";
import { useHabits } from "../../hooks/useHabits";

const initialStateHabit = { name: "", days: [] };

const Habits = () => {
  const [data, setData] = useState([]);
  const [habit, setHabit] = useState(initialStateHabit);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { updateHabits } = useHabits();

  const { user, setHabitsInfo, initialState } = useContext(UserContext);

  useEffect(() => {
    let isCancelled = false;

    if (user) {
      (async function () {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const URL = "habits";

        try {
          const { data } = await api.get(URL, config);
          if (!isCancelled) {
            setData(data);
            updateHabits();
            setIsLoading(false);
          }
        } catch (error) {
          alert(error);
        }
      })();
    }

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getHabits = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const URL = "habits";

    const promise = api.get(URL, config);

    promise.then(({ data }) => {
      updateHabits();
      setData(data);
    });
    promise.catch((e) => alert(e));

    setIsLoading(false);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const addHabit = (habit, changeLoading) => {
    if (habit) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const URL = "habits";

      const promise = api.post(URL, { ...habit }, config);

      promise.then((res) => {
        const promise = api.get(URL, config);

        promise.then(({ data }) => {
          updateHabits();
          setData(data);
          setHabit(initialStateHabit);
        });
        promise.catch((e) => alert(e));
        setShow(false);
      });

      promise.catch((e) => {
        alert("Ocorreu um erro ao adicionar h??bito.");
        alert(e);
        changeLoading(false);
      });

      setIsLoading(false);
    }
  };

  const deleteHabit = (id) => {
    const userResponse = window.confirm(
      "Voc?? quer realmente apagar esse h??bito?"
    );

    if (id && userResponse) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = api.delete(`habits/${id}`, config);

      promise
        .then((res) => {
          if (res.status === 204) {
            setHabitsInfo(initialState);
            getHabits();
          }
        })
        .catch((e) => alert(e));

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div>
        <h2>Meus h??bitos</h2>
        <Button
          content="+"
          status={{ isLoading: false, isDisabled: false }}
          onClick={handleClick}
        />
      </div>
      {show && (
        <CreateHabit
          habit={habit}
          setHabit={setHabit}
          changeShow={setShow}
          addHabit={addHabit}
        />
      )}
      {isLoading && <Loading />}
      {data.length === 0 && !isLoading ? (
        <p>
          Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para
          come??ar a trackear!
        </p>
      ) : (
        data.map(({ id, name, days }) => (
          <HabitCard
            key={id}
            id={id}
            name={name}
            days={days}
            deleteHabit={() => deleteHabit(id)}
          />
        ))
      )}
    </Container>
  );
};

export { Habits };
