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

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    -webkit-text-fill-color: blue !important;
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }

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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3788c4;
    cursor: pointer;
  }

  &:disabled {
    filter: grayscale(100%);
  }
`;

export { Container, Input, Button };
