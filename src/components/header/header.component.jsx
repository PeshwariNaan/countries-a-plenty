import { useContext } from 'react';
import { ThemeContext } from '../../store/theme.context';
import { actiontypes } from '../../store/theme.context';
import { HeaderContainer, Title, DarkModeToggle } from './header.styles';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleDarkMode = () => {
    if (darkMode) {
      theme.dispatch({ type: actiontypes.LIGHTMODE });
    } else {
      theme.dispatch({ type: actiontypes.DARKMODE });
    }
  };

  return (
    <HeaderContainer isDark={darkMode}>
      <Title isDark={darkMode}>Where in the world?</Title>
      <DarkModeToggle isDark={darkMode}>
        <ion-icon
          onClick={toggleDarkMode}
          name={`moon${darkMode ? '' : '-outline'}`}
        ></ion-icon>{' '}
         Dark Mode 
      </DarkModeToggle>
    </HeaderContainer>
  );
};

export default Header;
