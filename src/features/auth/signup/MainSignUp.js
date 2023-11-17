import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import '../../../css/signup/signup.css';

const MainSignUp = () => {
  return (
    <div className='signupContainer'>
      <header className="mainSignupNav">
        Back to &nbsp;
        <Link to='/'>  
          <FontAwesomeIcon icon={faHouse} style={{color:'white'}}/>
        </Link>
      </header>
      <article className="signupBg">
        <form action="" className='signupForm' id='mainSignupForm'>
          <h1 className='signupTitle'>Sign Up</h1>
          <table className='mainSignupBox'>
            <tbody className='mainSignupBody'>
              <tr>
                <td>
                  <Link to='/user-signup' className='signupUserLink'>
                    <button className='userButton'>User</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to='/doctor-signup' className='signupDoctorLink'>
                    <button className='doctorButton'>Doctor</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        <p style={{paddingTop:'1rem'}}>Created an account? <Link to='/signin'>SignIn</Link></p>
        </form>
      </article>
    </div>
  )
}

export default MainSignUp