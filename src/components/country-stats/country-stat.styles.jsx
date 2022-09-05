import styled from "styled-components";

export const StatContainer = styled.div`
  display: flex;
  width: max-content;
  align-items: flex-end;
  margin-bottom: ${props => props.bGap? '1rem': '0'}
  `

export const StatsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};
  padding: 0 1rem 0 0;
  margin: 0;
`;

export const Stats = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};
  padding: 0;
  margin: 0;
`;