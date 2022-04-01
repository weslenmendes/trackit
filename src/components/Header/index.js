import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

import { ReactComponent as SmallLogo } from "../../assets/small-logo.svg";

const Header = () => {
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();

  return !(pathname === "/" || pathname === "/register") ? (
    <HeaderStyled>
      <SmallLogo title="TrackIt" height="49px" />
      <img src={user.image} alt={user.name} />
    </HeaderStyled>
  ) : (
    <></>
  );
};

const HeaderStyled = styled.header`
  background-color: #126ba5;
  padding: 11px 18px;
  width: 100%;
  min-width: 320px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;

export { Header };
