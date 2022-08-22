import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  min-width: 25rem;
  border-radius: .75rem;
  overflow: hidden;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const FlagImageContainer = styled.div`
  width: 100%;
  height: 15rem;
`;

export const FlagImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-height: 15rem;
  min-width: 20rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 2rem;
  width: 100%;
  height: 15rem;
`;

export const CountryTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
 
`;

export const StatContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  `

export const StatsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1rem .25rem 0;
  margin: 0;
`;

export const Stats = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;
