import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 0;
  background-color:${props =>  props.isDark? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 1s linear;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};
`;

export const DarkModeToggle = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};

    ion-icon {
        font-size: 2rem;
        color: ${props => props.isDark? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'};
        cursor: pointer;
        transition: all 1s linear;
    }
`
