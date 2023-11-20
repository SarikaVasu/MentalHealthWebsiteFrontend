import { Link } from 'react-router-dom';
import '../../css/lpcomponents/NavBar.css';
import Logo from '../../img/ManaMLogo.png'

const NavBar = () => {
  return (
    <nav style={{height:'4.5rem'}}>
        <article>
            <img src={Logo} alt="ManaM Logo" style={{ height: '3rem', verticalAlign: 'middle', marginRight: '0.5rem' }} />
            <span style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '2rem', paddingTop:'0.1rem', display:'inline' }}>ManaM</span>
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