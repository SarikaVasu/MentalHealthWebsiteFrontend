import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import '../../../css/signin/signin.css';

const MainSignIn = () => {
  return (
    <div className='signinContainer'>
      <header className="mainSignupNav">
        Back to &nbsp;
        <Link to='/'>  
          <FontAwesomeIcon icon={faHouse} style={{color:'white'}}/>
        </Link>
      </header>
      <article className="signinBg">
        <form action="" className='signinForm' id='mainSigninForm'>
        <h1 className='signinTitle'>Sign In</h1>
          <table className='mainSigninBox'>
            <tbody className='mainSigninBody'>
              <tr>
                <td>
                  <Link to='/user-signin' className='signinUserLink'>
                    <button className='userButton'>User</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to='/doctor-signin' className='signinDoctorLink'>
                    <button className='doctorButton'>Doctor</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{paddingTop:'1rem'}}>Don't have an account? <Link to='/signup'>SignUp</Link></p>
        </form>
      </article>
    </div>
  )
}

export default MainSignIn