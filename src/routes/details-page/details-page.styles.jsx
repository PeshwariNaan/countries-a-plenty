import styled from 'styled-components';
import { StyledButton } from '../../components/button/button.styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  transition: all 0.5s linear;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: 20rem;
  width: 70vw;
  align-items: center;
`

export const DetailsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: minmax(30rem, 60rem) minmax(30rem, 60rem);
  height: 40rem;
`;

export const FlagImage = styled.img`
  display: grid;
  grid-column: 1 / 2;
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10% 55% 35%;
  margin-left: 5rem;
`;

export const CountryTitle = styled.h1`
  display: grid;
  align-self: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  font-size: 2.5rem;
  font-weight: 800;
  padding-left: 2rem;
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
`;

export const DetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 1rem 0 0 2rem;
`;

export const DetailsLRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding-left: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
`;

export const BorderButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  width: 100%;
  align-items: center;
  margin-left: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    margin-right: 1rem;
  }

`;

export const BackButton = styled(StyledButton)`
  margin: 0;
  height: 4rem;
  width: 12rem;
  justify-content: space-between;
`


