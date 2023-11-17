import { Outlet } from 'react-router-dom';
import UserNavBar from './usercomponents/UserNavBar';
import UserFooter from './usercomponents/UserFooter';

const UserLayout = () => {
  return (
    <>
      <UserNavBar />
      <div className="userBody-container">
        <Outlet />
      </div>
      <UserFooter />
    </>
  )
}

export default UserLayout;