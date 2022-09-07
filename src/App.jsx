import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './routes/home-page/home-page.component';
import DetailsPage from './routes/details-page/details-page.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/countries-a-plenty' element={<HomePage />} />
        <Route path='/countries-a-plenty/details/:name' element={<DetailsPage />} />      
      </Routes>
    </Fragment>
  );
}

export default App;
