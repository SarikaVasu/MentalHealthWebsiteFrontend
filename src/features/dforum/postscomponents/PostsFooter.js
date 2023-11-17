import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../../../css/usercomponents/Footer.css';

const UserFooter = () => {
  const { username, status, identity } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  let link;
  if(identity === 'user') {
    link='/user';
  } else {
    link='/doctor'
  }

  const onGoHomeClicked = () => navigate(link);

  let goHomeButton = null;
  if (pathname !== '/user' || pathname !== '/doctor') {
    goHomeButton = (
      <button
        className='userFooterHomeIcon'
        title='Home'
        onClick={ onGoHomeClicked }>
          <FontAwesomeIcon icon={ faHouse } />
      </button>
    )
  }

  const content = (
    <footer className="userFooter">
      { goHomeButton }
      <p>Current User: {username}</p>
      <p>Status: {status}</p>
    </footer>
  )

  return content;
}

export default UserFooter;