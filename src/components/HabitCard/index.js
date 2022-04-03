import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";

const HabitCard = ({ id, name, days: arrDays, deleteHabit }) => {
  const createDays = () => {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const isSelected = (index) => {
      if (arrDays && arrDays.includes(index)) return "selected";

      return "";
    };

    return (
      <ul>
        {days.map((day, index) => (
          <button key={index} className={isSelected(index)}>
            {day}
          </button>
        ))}
      </ul>
    );
  };

  const days = createDays();

  return (
    <StyledHabitCard>
      <p>{name}</p>
      {days}
      <button className="delete-btn" onClick={deleteHabit}>
        <IoTrashOutline fill="#666666" height="15px" />
      </button>
    </StyledHabitCard>
  );
};

const StyledHabitCard = styled.article`
  --primary-color: #52b6ff;
  --color: #fff;
  --border-color: #d4d4d4;
  --btn-selected: #cfcfcf;
  --font-lexend: "Lexend Deca", sans-serif;

  height: max-content;
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;

  .delete-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  p {
    font-size: 20px;
    word-break: break-word;
    width: 87%;
  }

  ul {
    display: flex;
    margin-top: 8px;

    list-style: none;
    margin-top: 10px;

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      margin-right: 4px;
      padding-top: 7px;
      border: 1px solid var(--border-color);
      border-radius: 5px;
      font-size: 20px;
      color: var(--border-color);
      cursor: pointer;
      pointer-events: none;

      display: flex;
      justify-content: center;
      align-items: center;

      &.selected {
        background-color: var(--btn-selected);
        color: var(--color);
      }
    }

    button:last-child {
      margin-right: 0;
    }
  }
`;

export { HabitCard };
