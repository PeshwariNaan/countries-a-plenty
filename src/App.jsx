import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './store/theme.context';
import { actiontypes } from './store/theme.context';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './routes/home-page/home-page.component';
import DetailsPage from './routes/details-page/details-page.component';
import { darkTheme, lightTheme, GlobalStyle } from './theme';

function App() {
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
    <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
      <GlobalStyle />
      <Header theme={theme} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/countries-a-plenty' element={<HomePage />} />
        <Route path='/countries-a-plenty/details/:name' element={<DetailsPage />} />      
      </Routes>
    </ThemeProvider>
  );
}

export default App;
