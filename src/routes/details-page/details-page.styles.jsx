import styled from 'styled-components';
import { StyledButton } from '../../components/button/button.styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  background-color: ${(props) =>
    props.isDark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  transition: all 0.5s linear;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: 20rem;
  width: 80vw;
  align-items: center;
  @media (max-width: 850px) {
    height: 10rem;
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: minmax(30rem, 70rem) minmax(30rem, 70rem);
  height: 40rem;
  min-height: 25rem;

  @media (max-width: 1200px) {
    grid-template-rows: minmax(30rem, 70rem) minmax(30rem, 150rem);
    grid-template-columns: minmax(30rem, 100rem);
    row-gap: 5rem;
  }
  @media (max-width: 750px) {
    width: 90vw;
    row-gap: 1rem;
  }
  @media (max-width: 650px) {
    grid-template-rows: minmax(30rem, 50rem) minmax(30rem, 500rem);
  }
  @media (max-width: 450px) {
    grid-template-rows: minmax(20rem, 50rem) minmax(30rem, 100rem);
  }
`;

export const FlagImage = styled.img`
  display: grid;
  grid-column: 1 / 2;
  padding-left: 2rem;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 1200px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    width: 50rem;
    place-self: center;
    //padding: 0 5rem;
  }
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10% 55% 35%;
  margin: 0 2rem 0 5rem;
  @media (max-width: 1200px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1;
    grid-template-rows: repeat(4, auto);
    row-gap: 2rem;
    margin: 0;
  }
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
  @media (max-width: 750px) {
    grid-column: 1 / -1;
  }
`;

export const DetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 1rem 0 0 2rem;
  @media (max-width: 750px) {
    grid-column: 1 / -1;
    margin: 0;
  }
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
  @media (max-width: 750px) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    padding: 0;
    margin: 0;
  }
`;

export const BorderButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  margin-left: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    margin-right: 1rem;
  }
  @media (max-width: 750px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin: 0;
    padding-bottom: 1rem;
  }
`;

export const BackButton = styled(StyledButton)`
  margin: 0;
  height: 4rem;
  width: 12rem;
  justify-content: space-between;
`;
