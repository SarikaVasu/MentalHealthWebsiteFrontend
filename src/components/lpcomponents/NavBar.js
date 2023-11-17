import { Link } from 'react-router-dom';
import '../../css/lpcomponents/NavBar.css';

const NavBar = () => {
  return (
    <nav>
        <article>
            <span>ManaM</span>
        </article>
        <article>
            <ul className='navItems'>
                <li>
                    <Link to='/' className='navLink'>Home</Link>
                </li>
                <li>
                    <Link to='/doctors' className='navLink'>Doctors</Link>
                </li>
                <li>
                    <Link to="/services" className='navLink'>Services</Link>
                </li>
                <li>
                    <Link to="/confession-forum" className='navLink'>Let's Talk</Link>
                </li>
                <li>
                    <button className='signupButton'>
                        <Link to="/signup" className='navLink'>Sign Up</Link>
                    </button>
                </li>
                <li>
                    <button className='signinButton'>
                        <Link to='/signin' className='navLink'>Sign In</Link>
                    </button> 
                </li>
            </ul>
        </article>
    </nav>
  )
}

export default NavBar;