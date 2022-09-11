import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 0;
  background-color: var(--ele);
  box-shadow: 0 0.5rem 1rem var(--shadow);
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
  color: var(--text);
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const DarkModeToggle = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text);
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  ion-icon {
    font-size: 2rem;
    color: var(--text);
    cursor: pointer;
    transition: all 1s linear;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;
