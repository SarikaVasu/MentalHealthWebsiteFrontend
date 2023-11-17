import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../../../css/doctorcomponents/Footer.css';

const DoctorFooter = () => {
  const { username, status } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate('/doctor');

  let goHomeButton = null;
  if (pathname !== '/doctor') {
    goHomeButton = (
      <button
        className='doctorFooterHomeIcon'
        title='Home'
        onClick={ onGoHomeClicked }>
          <FontAwesomeIcon icon={ faHouse } />
      </button>
    )
  }

  const content = (
    <footer className="doctorFooter">
      { goHomeButton }
      <p>Current User: {username}</p>
      <p>Status: {status}</p>
    </footer>
  )

  return content;
}

export default DoctorFooter;