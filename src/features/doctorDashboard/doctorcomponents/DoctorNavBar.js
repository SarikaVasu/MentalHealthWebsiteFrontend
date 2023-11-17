import { useEffect } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useNavigate, Link } from 'react-router-dom';
import { useDoctorSendLogoutMutation } from '../../auth/doctorAuthApiSlice';
import { useGetDoctorinfosQuery } from '../../admin/doctorinfo/doctorinfosApiSlice';
import useAuth from '../../../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../../css/doctorcomponents/NavBar.css';

const DoctorNavBar = () => {
  const { id1 } = useAuth();
  console.log(id1);

  const { data: doctors,
    isLoading : isInfoLoading,
    isSuccess : isInfoSuccess,
    isError,
    error } = useGetDoctorinfosQuery('getDoctorinfos');
    console.log(doctors);

  const user = (doctors?.entities[id1]);
  let link;
  if(isInfoSuccess) {
    console.log(user)
    if(user?.firstname && user?.lastname && user?.gender && user?.dob && user?.contactno && user?.email && user?.address && user?.degree && user?.college && user?.clinic && user?.clinicContact && user?.experience ) {
      link = '/doctor/doctor-profile';
    } else {
      link = '/doctor/fill-doctorinfo';
    }
  }

  const navigate = useNavigate();

  const [sendDoctorLogout, { 
      isLoading, 
      isSuccess : isLogoutSuccess, 
      isError : isLogoutError, 
      error : logoutError 
  }] = useDoctorSendLogoutMutation()

  useEffect(() => {
    if (isLogoutSuccess) navigate('/');
  }, [isLogoutSuccess, navigate])

  if (isLoading || isInfoLoading) return <PulseLoader color={"black"} />

  if (isError || isLogoutError) return <p>Error: {error?.data?.message || logoutError.data?.message}</p>

  const onLogoutClicked = () => sendDoctorLogout();

  return (
    <div>
        <header className='doctorHeader'>
          <article className='doctorHeaderTitle'>
            <h1 className='doctorHeaderTitle1'>
              ManaM 
            </h1>
            <h2 className='doctorHeaderTitle2'>
              <Link to='/doctor'>
                Doctor Dashboard
              </Link>
            </h2>
          </article>
          <article className='doctorHeaderLinks'>
            <Link title='Doctor Profile' className='doctorHeaderLink' to={link}>
              <CgProfile className='doctorHeaderProfileIcon'/>
            </Link>
            <Link  title='Logout' className='doctorHeaderLink' onClick={onLogoutClicked}>
              <RiLogoutCircleLine className='doctorHeaderLogoutIcon'/>
            </Link>
          </article>
      </header>
    </div>
  )
}

export default DoctorNavBar;