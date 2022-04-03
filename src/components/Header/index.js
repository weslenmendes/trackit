import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

import { ReactComponent as SmallLogo } from "../../assets/small-logo.svg";

import { getLocalStorage } from "../../utils";

const Header = () => {
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getLocalStorage("user")) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return !(pathname === "/" || pathname === "/register") ? (
    <HeaderStyled>
      <SmallLogo title="TrackIt" height="49px" />
      {user && <img src={user.image} alt={user.name} />}
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
  z-index: 2;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;

export { Header };
