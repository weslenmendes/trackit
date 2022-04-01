import styled from "styled-components";
import { ReactComponent as SmallLogo } from "../../assets/small-logo.svg";

const Header = ({ avatar }) => {
  return (
    <HeaderStyled>
      <SmallLogo title="TrackIt" height="49px" />
      <img src={avatar || ""} alt="" />
    </HeaderStyled>
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
