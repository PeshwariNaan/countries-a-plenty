import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 45rem;
  height: 6rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  ion-icon {
    font-size: 2rem;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)': 'hsl(0, 0%, 52%)'};
    align-self: center;
    padding-left: 2rem;
  }
`;


export const StyledInput = styled.input`
  -webkit-appearance: none;
  width: 40rem;
  padding: 0 0 0 3rem;  
  height: 100%;
 
  color: ${(props) =>
    props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 2rem;
  margin-bottom: 3rem;

    &::placeholder{
    color: ${props => props.isDark ? '#FDF5E6' : '#000000'};
    
  }
`;
