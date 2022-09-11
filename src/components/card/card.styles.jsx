import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  min-width: 25rem;
  border-radius: .75rem;
  overflow: hidden;
  background-color: var(--ele);
  box-shadow: 0 .5rem 1rem var(--shadow);
  transition: all 1s linear;
`;

export const FlagImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: 0 .5rem 1rem var(--shadow);
  cursor: pointer;
`;

export const FlagImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-height: 15rem;
  min-width: 25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 0 0 1rem;  
  width: 23rem;
  height: 15rem;
`;

export const CountryTitle = styled.h1`
  padding-top: .5rem;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text); 
`;

