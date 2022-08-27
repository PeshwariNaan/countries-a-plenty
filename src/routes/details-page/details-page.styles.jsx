import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300rem, 400rem));
  height: 60vh;
`;

export const FlagImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10% 70% 20%;
`;

export const CountryTitle = styled.h1`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 1.75rem;
  font-weight: 800;
  /* color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}; */
`;

export const StatContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const StatsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  /* color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}; */
  padding: 0 0 0 0;
  margin: 0;
`;

export const Stats = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  /* color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}; */
  padding: 0;
  margin: 0;
`;
