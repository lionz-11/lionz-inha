import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import Landing from '../pages/Landing/Landing';
import Main from '../pages/Main/Main';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile-edit' element={<ProfileEdit />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
