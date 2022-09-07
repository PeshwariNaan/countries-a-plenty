import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 0;
  background-color: ${(props) =>
    props.isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 1s linear;
`;
export const ContentContainer = styled.div`
  display: flex;
  height: 8rem;
  margin: 0 auto;
  width: 80vw;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const DarkModeToggle = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  ion-icon {
    font-size: 2rem;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    cursor: pointer;
    transition: all 1s linear;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;