import { Link } from 'react-router-dom';
import '../../css/lpcomponents/Footer.css';

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <article className="footerlist">
            <ul className='footerItems'>
                <li>
                    <Link to='/' className='footerLink'>Home</Link>
                </li>
                <li>
                    <Link to='/doctors' className='footerLink'>Doctors</Link>
                </li>
                <li>
                    <Link to="/services" className='footerLink'>Services</Link>
                </li>
                <li>
                    <Link to="/confession-forum" className='footerLink'>Let's Talk</Link>
                </li>
                <li>
                    <Link to="/about" className='footerLink'>About Us</Link>
                </li>
                <li>
                    <Link to="/contact-us" className='footerLink'>Contact Us</Link>
                </li>
            </ul>
        </article>
        <article className="copyright">
            manam copyright &copy; {today.getFullYear()}
        </article>      
    </footer>
  )
}

export default Footer