import styled from "styled-components";

const CreateHabitStyled = styled.article`
  --primary-color: #52b6ff;
  --color: #fff;
  --border-color: #d4d4d4;
  --btn-selected: #cfcfcf;
  --font-lexend: "Lexend Deca", sans-serif;

  max-width: 450px;
  width: 100%;
  padding: 18px;
  margin-bottom: 29px;
  font-family: var(--font-lexend);
  font-size: 18px;
  background-color: var(--color);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 45px;
    padding: 0 10px;
    font-family: inherit;
    font-size: 18px;
    border: 1px solid var(--border-color);
    border-radius: 5px;

    &::placeholder {
      font-family: inherit;
      color: var(--border-color);
    }
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

  .actions {
    font-family: inherit;
    font-size: 16px;
    text-align: right;
    margin-top: 29px;

    display: flex;
    justify-content: flex-end;

    .btn {
      font-family: inherit;
      height: 35px;
      width: max-content;
      padding: 0 20px;
      background-color: var(--primary-color);
      font-size: 16px;
      color: var(--color);
      border: none;
      border-radius: 4.7px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-btn {
      height: 35px;
      width: max-content;
      font-family: inherit;
      font-size: 16px;
      color: var(--primary-color);
      padding: 0 20px;
      margin-right: 10px;
      cursor: pointer;
      background-color: transparent;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { CreateHabitStyled };
