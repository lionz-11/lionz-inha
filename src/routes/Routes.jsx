import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import Landing from '../pages/Landing/Landing';
import HomeworkList from '../pages/HomeworkList/HomeworkList';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile-edit' element={<ProfileEdit />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/homework-list' element={<HomeworkList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
