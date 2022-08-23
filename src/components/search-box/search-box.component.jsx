import { StyledInput, InputContainer } from './search-box.styles';

const SearchBox = ({ isDark, placeholder }) => {
  return (
    <InputContainer isDark={isDark}>
    <ion-icon name="search"></ion-icon>
      <StyledInput
        isDark={isDark}
        type="search"
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
    </InputContainer>
  );
};

export default SearchBox;
