import React from 'react';
import AllHeader from "../lpcomponents/AllHeader";
import ContactImage from '../../img/ContactUs.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  return (
    <body className='bgBody'>
      <AllHeader />
      <h1 style={{ position: 'fixed', top: '0px' , paddingRight:'5px', paddingLeft:'15px', paddingTop:'8px' }}>Contact Us</h1>
      <div className="postsDivContainer" style={{ padding: '20px' }}>
        <div>
          <img src={ContactImage} alt="Contact Us" style={{ width: '100%', margin: '5% 0' }} />
          <h2 style={{ margin: '20px', fontSize: '3rem' }}>Contact Us Today, Change Your Life</h2>
          <h2 style={{ margin: '20px', fontSize: '2rem', textAlign: 'justify' }}>Along with the development of social life, people today encounter many strange and difficult issues. Here we want to mention mental health concerns, can be understood as a major problem of human beings in modern.</h2>
          <h2 style={{ margin: '20px', fontSize: '2rem', textAlign: 'justify' }}>Acknowledging this requirement, ManaM established a Psychological and Mental Health care online counseling platform, designed to provide psychosocial counseling and therapy.</h2>
          <h2 style={{ margin: '20px', fontSize: '3rem' }}>Contact Details</h2>
          <h2 style={{ margin: '20px', fontSize: '2.5rem' }}>Reach us on:</h2>
          <div>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', paddingLeft: '1rem', fontSize:"3rem" }} />
            <span style={{ color: 'white', paddingLeft: '2rem', fontSize:"2.5rem" }} >9876543210</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', paddingLeft: '1rem', fontSize:"3rem"  }} />
            <span style={{ color: 'white', paddingLeft: '2rem', fontSize:"2.5rem" }} >support@manam.com </span>
          </div>
        </div>
      </div>
    </body>
  );
}

export default ContactUs;