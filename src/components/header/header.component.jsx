import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../store/theme.context';
import { actiontypes } from '../../store/theme.context';
import { HeaderContainer, Title, DarkModeToggle, ContentContainer } from './header.styles';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate()
  const toggleDarkMode = () => {
    if (darkMode) {
      theme.dispatch({ type: actiontypes.LIGHTMODE });
    } else {
      theme.dispatch({ type: actiontypes.DARKMODE });
    }
  };

  return (
    <HeaderContainer isDark={darkMode}>
      <ContentContainer>
      <Title isDark={darkMode} onClick={() => navigate('/countries-a-plenty')}>Where in the world?</Title>
      <DarkModeToggle isDark={darkMode}>
        <ion-icon
          onClick={toggleDarkMode}
          name={`moon${darkMode ? '' : '-outline'}`}
        ></ion-icon>{' '}
         Dark Mode 
      </DarkModeToggle>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
