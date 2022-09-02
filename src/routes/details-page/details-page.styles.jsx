import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  transition: all 0.5s linear;
`;

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
  grid-template-rows: 10% 70% 20%;
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

export const StatContainer = styled.div`
  display: flex;
  width: max-content;
  align-items: flex-end;
  margin: 0 0 1rem 0;
  padding: 0;
`;

export const StatsTitle = styled.h2`
  width: max-content;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  padding: 0 1rem 0 0;
  margin: 0;
`;

export const Stats = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  padding: 0;
  margin: 0;
`;

export const BorderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1 / -1;
  grid-row: 3 / 4;

  h2 {
    font-size: 1.75rem;
    color: orange;
  }

`;


