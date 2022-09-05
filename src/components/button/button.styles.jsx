import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-style: none;
  text-align: center;
  font-family:'Nunito Sans' ;
  font-size: 1.5rem;
  font-weight: 300;
  color:${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};;
  border-radius: 0.3rem;
  background-color: ${props =>  props.isDark? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 1s linear;
  cursor: pointer;
`;
