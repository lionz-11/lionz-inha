import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import Landing from '../pages/Landing/Landing';
import HomeworkList from '../pages/HomeworkList/HomeworkList';
import Main from '../pages/Main/Main';
import SearchResult from '../pages/SearchResult/SearchResult';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/profile-edit/:welcome' element={<ProfileEdit />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/homework-list' element={<HomeworkList />} />
      <Route path='/search/:keyword' element={<SearchResult />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/error' element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
