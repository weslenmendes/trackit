import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0px 11px;
  margin-top: 5px;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  &:disabled {
    color: #afafaf;
    background-color: #f2f2f2;
    border-color: #d4d4d4;
    opacity: 0.8;
    pointer-events: none;
  }

  &::placeholder-shown {
    background-color: #fff;
  }

  &::placeholder {
    color: #dbdbdb;
  }
`;

export { Input };
