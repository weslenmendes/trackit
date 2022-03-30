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

export { Container };
