import styled from "styled-components";

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
  opacity: ${(props) => props.opacity || 1};

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: ${(props) => props.pointer || "auto"};

  &:hover {
    background-color: #3788c4;
    cursor: pointer;
  }

  &:disabled {
    filter: grayscale(100%);
  }
`;

export { Button };
