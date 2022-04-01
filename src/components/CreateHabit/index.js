import { useState } from "react";
import { CreateHabitStyled } from "./styled";

const initialState = {
  name: "",
  days: [],
};

const CreateHabit = ({ changeShow, addHabit }) => {
  const [habit, setHabit] = useState(initialState);

  const handleChange = (e) => {
    setHabit({ ...habit, name: e.target.value });
  };

  const handleSelectDay = (num) => {
    const { days } = habit;

    if (days.length && days.includes(num)) {
      const newDays = days.filter((day) => day !== num);
      setHabit({ ...habit, days: [...newDays] });
    } else {
      setHabit({ ...habit, days: [...days, num] });
    }
  };

  const createDays = () => {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const isSelected = (index) => {
      if (habit.days && habit.days.includes(index)) return "selected";

      return "";
    };

    return (
      <ul>
        {days.map((day, index) => (
          <button
            key={index}
            className={isSelected(index)}
            onClick={() => handleSelectDay(index)}
          >
            {day}
          </button>
        ))}
      </ul>
    );
  };

  const days = createDays();

  return (
    <CreateHabitStyled>
      <input
        type="text"
        name="name"
        value={habit.name}
        onChange={handleChange}
        placeholder="nome do habito"
        autoComplete="off"
        required
      />
      {days}
      <div className="actions">
        <button className="text-btn" onClick={() => changeShow(false)}>
          Cancelar
        </button>
        <button className="btn" onClick={() => addHabit({ ...habit })}>
          Salvar
        </button>
      </div>
    </CreateHabitStyled>
  );
};

export { CreateHabit };
