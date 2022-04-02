import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";

const TodayHabitCard = ({ habit, uncheckHabit, checkHabit }) => {
  const { id, name, done, currentSequence, highestSequence } = habit;

  const handleSelect = () => {
    if (done) {
      uncheckHabit(id);
    } else {
      checkHabit(id);
    }
  };

  let classNameStatusOfHabit = done ? "highlighted" : "";
  let classNameHighestSequence =
    done && currentSequence === highestSequence ? "highlighted" : "";

  return (
    <StyledTodayHabitCard>
      <div className="content">
        <h3>{name}</h3>
        <p>
          Sequência atual:{" "}
          <span className={classNameStatusOfHabit}>{currentSequence} dias</span>
          <br />
          Seu recorde:{" "}
          <span className={classNameHighestSequence}>
            {currentSequence} dias
          </span>
        </p>
      </div>
      <button onClick={handleSelect} className={classNameStatusOfHabit}>
        <IoCheckmark fill="#fff" />
      </button>
    </StyledTodayHabitCard>
  );
};

const StyledTodayHabitCard = styled.article`
  margin-bottom: 10px;
  background-color: #fff;
  color: #666666;
  padding: 13px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }

  p {
    margin-top: 7px;
    font-size: 13px;
    line-height: 16px;
  }

  button {
    height: 69px;
    width: 69px;
    color: #fff;
    fill: #fff;
    margin-right: 10px;

    background-color: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 45px;
      height: 35px;
    }

    &.highlighted {
      background-color: #8fc549;
    }
  }

  span.highlighted {
    color: #8fc549;
  }
`;

export { TodayHabitCard };
