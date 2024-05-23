import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/home/AboutPage';
import NotFoundPage from './pages/home/NotFoundPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Route>
      {/*Not found page - Don't add routes below*/}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
