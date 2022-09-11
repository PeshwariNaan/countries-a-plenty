import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../store/theme.context';
import {
  HeaderContainer,
  Title,
  DarkModeToggle,
  ContentContainer,
} from './header.styles';

const Header = ({ toggleDarkMode }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ContentContainer>
        <Title
          onClick={() => navigate('/countries-a-plenty')}
        >
          Where in the world?
        </Title>
        <DarkModeToggle>
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
