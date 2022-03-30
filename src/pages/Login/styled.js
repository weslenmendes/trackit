import styled from "styled-components";

const Container = styled.section`
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-top: 68px;
  }

  form {
    max-width: 350px;
    margin-top: 32px;
  }

  span {
    font-size: 14px;
    line-height: 17px;
    display: block;
    margin-top: 25px;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0px 11px;
  margin-top: 5px;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 6px;
  background-color: #52b6ff;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  border: none;
  border-radius: 4.63636px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  &:disabled {
    filter: grayscale(100%);
  }
`;

export { Container, Input, Button };
