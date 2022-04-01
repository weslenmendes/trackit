import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as SpinnerSVG } from "../../assets/spinner.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <h2 onClick={() => navigate("/habits")}>Hábitos</h2>
      <div className="circle">
        <SpinnerSVG fill="#fff" title="" className="circle-intern" />
        Hoje
      </div>
      <h2 onClick={() => navigate("/history")}>Histórico</h2>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding: 0 18px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  h2 {
    font-size: 18px;
    line-height: 23px;
    font-weight: 400;
    color: #126ba5;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .circle {
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52b6ff;
    font-size: 18px;
    color: #fff;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    .circle-intern {
      width: 75px;
      height: 75px;

      position: absolute;
      top: 8px;
      left: 13px;
    }
  }
`;

export { Footer };
