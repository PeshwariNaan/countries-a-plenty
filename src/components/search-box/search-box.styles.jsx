import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 45rem;
  height: 6rem;
  border-radius: 0.5rem;
  background-color: var(--ele);
  box-shadow: 0 0.5rem 1rem var(--shadow);
  ion-icon {
    font-size: 2rem;
    color: var(--text);
    align-self: center;
    padding-left: 2rem;
  }

  @media (max-width: 1250px) {
    width: 35rem;
  }
  @media (max-width: 500px) {
    width: 30rem;
  }
`;


export const StyledInput = styled.input`
  -webkit-appearance: none;
  padding: 0 0 0 3rem;  
  height: 100%;
 
  color: var(--text);
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 2rem;
  margin-bottom: 3rem;

    &::placeholder{
    color: var(--text);    
  }
`;
