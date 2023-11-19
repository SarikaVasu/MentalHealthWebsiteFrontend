import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'
import { useDoctorSigninMutation } from '../doctorAuthApiSlice'
import usePersist from '../../../hooks/usePersist'
import useTitle from '../../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import '../../../css/signin/doctorsignin.css'

const DoctorSignIn = () => {
  useTitle('Doctor Signin')

  const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [doctorSignin, { isLoading }] = useDoctorSigninMutation()

    useEffect(() => {
        userRef.current.focus(); //focus on username field
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const { accessToken } = await doctorSignin({ username, password }).unwrap(); //catch error instaed of catching using rtk query isError
          dispatch(setCredentials({ accessToken }));
          setUsername('');
          setPassword('');
          navigate('/doctor');
      } catch (err) {
          if (!err.status) {
              setErrMsg('No Server Response');
          } else if (err.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg(err.data?.message);
          }
          errRef.current.focus();
      }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <PulseLoader color={"#FFF"} />

  return (
    <div className='doctorSigninContainer'>
      <header className="doctorSigninHeader">
        Back to
        <Link to='/'>  
          <FontAwesomeIcon icon={faHouse} style={{color:'white', paddingLeft:'1rem'}}/>
        </Link>
      </header>
      <article className="doctorSigninBg">
        <form action="POST" className='doctorSigninForm' onSubmit={handleSubmit} id='doctorSigninForm'>
          <table className='signinTable'>
            <thead className='doctorSigninHead'>
              <tr>
                <td colSpan={2}>Sign In</td>
              </tr>
            </thead>
            <tbody className='doctorSigninBody'>
              <tr>
                <td colSpan={2}><p ref={errRef} className={errClass} aria-live="assertive" style={{textAlign:"center", color:"red"}}>{errMsg}</p></td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="username">Username</label>
                </td>
                <td>
                  <input 
                      type="text" 
                      className='doctorUsername'
                      id='username'
                      ref={userRef}
                      value={username}
                      onChange={handleUserInput}
                      autoComplete='off'
                      placeholder='Username'
                      required/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input 
                      type="password" 
                      className='doctorPassword'
                      id='password'
                      value={password}
                      onChange={handlePwdInput}
                      placeholder='Password'
                      required/>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                <label htmlFor="persist" className="form__persist">
                        <input
                            type="checkbox"
                            className="form__checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                        />
                        Trust This Device
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <article>
            <Link>
              <button 
                  className='doctorSigninButton'
                  type='submit'
                  onClick={handleSubmit}>
                    Sign In
              </button>
            </Link>
          </article>
          <article>
            <p>
            Don't have an account?<Link to='/user-signup' style={{'textDecoration': 'underline'}}>Sign Up</Link>
            </p>
          </article>
        </form>
      </article>
    </div>
  )
}

export default DoctorSignIn;