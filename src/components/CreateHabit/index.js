import { useState } from "react";
import { CreateHabitStyled } from "./styled";
import { ThreeDots } from "react-loader-spinner";

const CreateHabit = ({ habit, setHabit, changeShow, addHabit }) => {
  const [isLoading, setIsLoading] = useState(false);

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
    <CreateHabitStyled className={isLoading && "disabled"}>
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
        <button
          className="btn"
          onClick={() => {
            setIsLoading(true);
            addHabit({ ...habit }, setIsLoading);
          }}
        >
          {isLoading ? (
            <ThreeDots color="#fff" height={13} width={50} />
          ) : (
            "Salvar"
          )}
        </button>
      </div>
    </CreateHabitStyled>
  );
};

export { CreateHabit };
