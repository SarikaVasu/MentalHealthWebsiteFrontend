import { Outlet } from 'react-router-dom';
import DoctorNavBar from './doctorcomponents/DoctorNavBar';
import DoctorFooter from './doctorcomponents/DoctorFooter';

const DoctorLayout = () => {
  return (
    <>
      <DoctorNavBar />
      <div className="userBody-container">
        <Outlet />
      </div>
      <DoctorFooter />
    </>
  )
}

export default DoctorLayout;