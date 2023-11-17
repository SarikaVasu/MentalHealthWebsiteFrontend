import LandingPage from './components/LandingPage';
import Doctors from './components/rootcomponents/Doctors';     //details only (pending)
import Services from './components/rootcomponents/Services';  //details only (pending)
import Posts from './components/rootcomponents/Posts';
import About from './components/rootcomponents/About';   //details only (pending)
import ContactUs from './components/rootcomponents/ContactUs';    //details only (pending)

import MainSignUp from './features/auth/signup/MainSignUp';
import UserSignUp from './features/auth/signup/UserSignUp';
import DoctorSignUp from './features/auth/signup/DoctorSignUp';

import MainSignIn from './features/auth/signin/MainSignIn';
import UserSignIn from './features/auth/signin/UserSignIn';
import DoctorSignIn from './features/auth/signin/DoctorSignIn';
import ForgotPassword from './features/auth/signin/ForgotPassword'; //pending

import UserLayout from './features/userDashboard/UserLayout';
import UserWelcome from './features/userDashboard/UserWelcome';
import FillUserinfo from './features/userDashboard/FillUserinfo';
import UserProfile from './features/userDashboard/UserProfile';
import ChangeUserProfile from './features/userDashboard/ChangeUserProfile';
import UserloginsList  from './features/admin/userlogin/UserloginsList';
import EditUserlogin from './features/admin/userlogin/EditUserlogin';
import NewUserForm from './features/admin/userlogin/NewUserForm';

import DoctorLayout from './features/doctorDashboard/DoctorLayout';
import DoctorWelcome from './features/doctorDashboard/DoctorWelcome';
import FillDoctorinfo from './features/doctorDashboard/FillDoctorinfo';
import DoctorProfile from './features/doctorDashboard/DoctorProfile';
import ChangeDoctorProfile from './features/doctorDashboard/ChangeDoctorProfile'
import DoctorloginsList from './features/admin/doctorlogin/DoctorloginsList';
import EditDoctorlogin from './features/admin/doctorlogin/EditDoctorlogin';
import NewDoctorForm from './features/admin/doctorlogin/NewDoctorForm';

import PostsLayout from './features/dforum/PostsLayout';
import PostsList from './features/dforum/PostsList';
import MyPosts from './features/dforum/MyPosts';
import SinglePostPage from './features/dforum/SinglePostPage';
import EditPost from './features/dforum/EditPost';
import NewPostForm from './features/dforum/NewPostForm';

import Prefetch from './features/auth/Prefetch';
import PersistLogin from './features/auth/PersistLogin';
import RequireAuth from './features/auth/RequireAuth';
import { ROLES } from './config/roles';

import {Routes, Route, Navigate} from 'react-router-dom';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('Manam Mental Health');


  return (
    
      <Routes>
        <Route path="/" element = {<LandingPage />}></Route>
        <Route path="/doctors" element = {<Doctors />}></Route>
        <Route path="/services" element = {<Services />}></Route>   
        <Route path="/confession-forum" element = {<Posts />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact-us" element = {<ContactUs />}></Route>


        <Route path="/signup" element = {<MainSignUp />}></Route>
        <Route path="/user-signup" element = {<UserSignUp />}></Route>
        <Route path="/doctor-signup" element = {<DoctorSignUp />}></Route>

        <Route path="/signin" element = {<MainSignIn />}></Route>
        <Route path='/user-signin' element = {<UserSignIn />}></Route>
        <Route path='/doctor-signin' element = {<DoctorSignIn />}></Route>
        <Route path="/forgot-password" element = {<ForgotPassword />}></Route>


        {/* Protected Routes */}
        {/* remain logged in even after refresh => PersistLogin */}
        <Route element={<PersistLogin />}>   
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>  {/*Object.values(ROLES) => all the roles are passed */} 
            {/* Prefetch stuffs to avoid loading */}
            <Route element={<Prefetch />}>
              {/* //Link?? */}
              <Route path='user' element = {<UserLayout />}>
                <Route index element = {<UserWelcome />} /> 
                <Route path='fill-userinfo' element={<FillUserinfo />}></Route>
                <Route path='user-profile' element = {<UserProfile />} />
                <Route path='user-profile-modify' element = {<ChangeUserProfile />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
                  {/* Add, update, del, view all doctors and users */}
                  <Route path='administration/settings/users-list'element = {<UserloginsList />} />
                  <Route path='administration/settings/users-list/:id' element= {<EditUserlogin />} />
                  <Route path='administration/settings/users-list/new' element= {<NewUserForm />} />

                  <Route path='administration/settings/doctors-list'element = {<DoctorloginsList />} />
                  <Route path='administration/settings/doctors-list/:id' element= {<EditDoctorlogin />} />
                  <Route path='administration/settings/doctors-list/new' element= {<NewDoctorForm />} />
                </Route>
              </Route>

              <Route path='doctor' element = {<DoctorLayout />}>
                <Route index element = {<DoctorWelcome />} /> 
                <Route path='fill-doctorinfo' element={<FillDoctorinfo />}></Route>
                <Route path='doctor-profile' element = {<DoctorProfile />} />
                <Route path='doctor-profile-modify' element = {<ChangeDoctorProfile />} />
                
              </Route>

              <Route path='confession-forum/post' element= {<PostsLayout />} >
                <Route index element = {<PostsList />} />  
                <Route path=':id' element = {<SinglePostPage />} />
                <Route path='my-posts/:anonymousname' element = {<MyPosts />} />
                <Route path='edit/:id' element = {<EditPost />} />
                <Route path='new' element = {<NewPostForm />} />
              </Route>

            </Route>
          </Route>
        </Route>
        {/* End of Protected Routes */}

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
  );
}

export default App;
