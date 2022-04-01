import { useState, useEffect, useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";

import { Container } from "./styled";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { CreateHabit } from "../../components/CreateHabit";
import { HabitCard } from "../../components/HabitCard";

const Habits = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getHabits();
  }, []);

  const getHabits = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const URL = "habits";

    const promise = api.get(URL, config);

    promise.then(({ data }) => setData(data));
    promise.catch((e) => alert(e));
  };

  const handleClick = () => {
    setShow(!show);
  };

  const addHabit = (habit) => {
    if (habit) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const URL = "habits";

      const promise = api.post(URL, { ...habit }, config);

      promise.then((res) => {
        setShow(false);
        getHabits();
      });

      promise.catch((e) => console.log(e.res));
    }
  };

  const deleteHabit = (id) => {
    if (id) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = api.delete(`habits/${id}`, config);

      promise.then((res) => {
        if (res.status === 204) getHabits();
      });
      promise.catch((e) => console.log(e));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <h2>Meus hábitos</h2>
          <Button
            content="+"
            status={{ isLoading: false, isDisabled: false }}
            onClick={handleClick}
          />
        </div>
        {show && <CreateHabit changeShow={setShow} addHabit={addHabit} />}
        {data.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
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
      <Footer />
    </>
  );
};

export { Habits };
