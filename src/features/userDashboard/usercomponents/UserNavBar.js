import { useEffect } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useNavigate, Link } from 'react-router-dom';
import { useUserSendLogoutMutation } from '../../auth/userAuthApiSlice';
import { useGetUserinfosQuery } from '../../admin/userinfo/userinfosApiSlice';
import useAuth from '../../../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../../css/usercomponents/NavBar.css';

const UserNavBar = () => {
  const { id1 } = useAuth();

  const { data: users,
          isLoading : isInfoLoading,
          isSuccess : isInfoSuccess,
          isError,
          error } = useGetUserinfosQuery('getUserinfos')
  const user = (users?.entities[id1]);
  let link;
  if(isInfoSuccess) {
    console.log(user);
    if(user?.firstname && user?.lastname && user?.gender && user?.dob && user?.contactno && user?.email && user?.address ) {
      console.log('Yes');
      link = '/user/user-profile';
    } else {
      link = '/user/fill-userinfo';
    }
  }

  const navigate = useNavigate();

  const [sendUserLogout, { 
      isLoading, 
      isSuccess : isLogoutSuccess, 
      isError : isLogoutError, 
      error : logoutError
  }] = useUserSendLogoutMutation()

  useEffect(() => {
    if (isLogoutSuccess) navigate('/');
  }, [isLogoutSuccess, navigate])

  if (isLoading || isInfoLoading) return <PulseLoader color={"black"} />

  if (isError || isLogoutError) return <p>Error: {error?.data?.message || logoutError.data?.message}</p>

  const onLogoutClicked = () => sendUserLogout();


  return (
    <div>
        <header className='userHeader'>
          <article className='userHeaderTitle'>
            <h1 className='userHeaderTitle1'>
              ManaM 
            </h1>
            <h2 className='userHeaderTitle2'>
              <Link to='/user'>
                User Dashboard
              </Link>
            </h2>
          </article>
          <article className='userHeaderLinks'>
            <Link title='User Profile' className='userHeaderLink' to={link}>
              <CgProfile className='userHeaderProfileIcon'/>
            </Link>
            <Link  title='Logout' className='userHeaderLink' onClick={onLogoutClicked}>
              <RiLogoutCircleLine className='userHeaderLogoutIcon'/>
            </Link>
          </article>
      </header>
    </div>
  )
}

export default UserNavBar