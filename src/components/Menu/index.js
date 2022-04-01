import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return !(pathname === "/" || pathname === "/register") ? (
    <StyledFooter>
      <h2 onClick={() => navigate("/habits")}>Hábitos</h2>
      <div className="circle" onClick={() => navigate("/today")}>
        <div className="progress-bar">
          <CircularProgressbar
            value={66}
            text="Hoje"
            strokeWidth={8}
            backgroundPadding={7}
            styles={buildStyles({
              textSize: "22px",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
      </div>
      <h2 onClick={() => navigate("/history")}>Histórico</h2>
    </StyledFooter>
  ) : (
    <></>
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
    cursor: pointer;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    .progress-bar {
      font-family: "Lexend Deca", sans-serif;
      width: 77px;
      height: 77px;

      position: absolute;
      top: 7px;
      left: 7px;
    }
  }
`;

export { Menu };
