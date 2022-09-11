import { StyledInput, InputContainer } from './search-box.styles';

const SearchBox = ({ isDark, placeholder, onChangeHandler }) => {
  return (
    <InputContainer isDark={isDark}>
    <ion-icon name="search"></ion-icon>
      <StyledInput
        isDark={isDark}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        aria-label="Search"
      />
    </InputContainer>
  );
};

export default SearchBox;
