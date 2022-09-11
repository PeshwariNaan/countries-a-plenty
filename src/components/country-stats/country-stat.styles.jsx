import styled from "styled-components";

export const StatContainer = styled.div`
  display: flex;
  width: max-content;
  margin-bottom: ${props => props.bGap? '1rem': '0'};
  @media (max-width: 1200px) {
    width: auto;    
  }  
  `

export const StatsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  padding: 0 1rem 0 0;
  margin: 0;
`;

export const Stats = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text);
  padding: 0;
  margin: 0;
`;