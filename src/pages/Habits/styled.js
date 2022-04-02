import styled from "styled-components";

const Container = styled.section`
  min-width: 350px;
  height: 100vh;
  overflow-y: auto;
  padding: 103px 18px;
  padding-bottom: 120px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
  font-family: "Lexend Deca", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e5e5e5;

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
    text-align: center;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #666666;
  }

  h2 {
    margin-top: 10px;
    font-size: 23px;
    line-height: 27px;
    font-weight: 400;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    font-size: 26px;
    padding-bottom: 5px;
  }
`;

export { Container };
