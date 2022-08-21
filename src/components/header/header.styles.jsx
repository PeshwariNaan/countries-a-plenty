import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 0;
  background-color:${props =>  props.isDark? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
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
    }
`
