import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './routes/home-page/home-page.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={HomePage} />
        {/* <Route path='/' element={} />       */}
      </Routes>
    </Fragment>
  );
}

export default App;
