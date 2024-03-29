import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import Landing from '../pages/Landing/Landing';
import HomeworkList from '../pages/HomeworkList/HomeworkList';
import Main from '../pages/Main/Main';
import SearchResult from '../pages/SearchResult/SearchResult';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomeworkAddEdit from '../pages/HomeworkAddEdit/HomeworkAddEdit';
import NoticeAddEdit from '../pages/NoticeAddEdit/NoticeAddEdit';
import Schedule from '../pages/Schedule/Schedule';
import Login from '../pages/Login/Login';
import HomeworkInfo from '../pages/HomeworkInfo/HomeworkInfo';
import NoticeInfo from '../pages/NoticeInfo/NoticeInfo';
import SubmitHomeWork from '../pages/SubmitHomework/SubmitHomeWork';
import NoticeList from '../pages/NoticeList/NoticeList';
import AlertSize from '../component/AlertSize/AlertSize';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/profile-edit/:welcome' element={<ProfileEdit />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/homework-list' element={<HomeworkList />} />
      <Route path='/homework/:addOrEdit/:homeworkIndex' element={<HomeworkAddEdit />} />
      <Route path='/notice-list' element={<NoticeList />} />
      <Route path='/notice/:addOrEdit/:noticeIndex' element={<NoticeAddEdit />} />
      <Route path='/search/:keyword' element={<SearchResult />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/homework-info/:homeworkIndex' element={<HomeworkInfo />} />
      <Route path='/notice-info/:noticeIndex' element={<NoticeInfo />} />
      <Route path='/homework-submit/:homeworkIndex' element={<SubmitHomeWork />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
