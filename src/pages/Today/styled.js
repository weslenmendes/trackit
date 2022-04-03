import styled from "styled-components";

const Container = styled.section`
  min-width: 350px;
  height: 100vh;
  overflow-y: auto;
  padding: 101px 18px 117px 18px;
  background-color: #f2f2f2;
`;

const Title = styled.h2`
  font-size: 23px;
  line-height: 29px;
  font-weight: 400px;
  color: #126ba5;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #bababa;
  line-height: 22px;

  &.highlighted {
    color: #8fc549;
  }
`;

const HabitsContainer = styled.main`
  margin-top: 28px;
`;

export { Container, Title, SubTitle, HabitsContainer };
