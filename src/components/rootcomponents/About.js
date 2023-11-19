import React from 'react';
import AllHeader from "../lpcomponents/AllHeader";
import about from '../../img/about.jpg'

const About = () => {
  return (
    <body className='bgBody'>
      <AllHeader />
      <h1 style={{ position: 'fixed', top: '0px', paddingRight:'5px', paddingLeft:'15px', paddingTop:'8px' }}>About Us</h1>
      <div className="postsDivContainer" style={{ padding: "5%" }}>
        <div>
          <img src={about} alt="About Us" style={{ width: '100%', margin: '5% 0' }} />
          <h2 style={{ margin: '20px', fontSize: '3rem' }}>WELCOME TO MANAM</h2>
          <h2 style={{ margin: '20px', fontSize: '2rem' }}>One of the Best Online Counseling Website in India</h2>
          <p style={{ margin: '20px', fontSize: '1.5rem', textAlign: 'justify' }}>ManaM is a Best Online Counselling website in India focusing on people with Mental, Emotional & Career related issues. Dealing with Psychological problems, Relationship Issues, and Emotional Conflicts can be extremely difficult and painful. We understand that not everyone is the same and that a comprehensive diagnosis and flexible solution is important to a successful recovery.</p>
          <p style={{ margin: '20px', fontSize: '1.5rem', textAlign: 'justify' }}>We provide Best Online Counselling and Therapy for Anxiety, Stress, depression, exam and work anxiety, mood swings, career, and marriage issues, occupational issues, relationship problems, child care and effective parenting, sleep problems, sexual problems associated with psychological conditions, LGBTQ community counseling, Insight development, counseling of Autistic and dyslexic children and their caregivers.</p>
          <p style={{ margin: '20px', fontSize: '1.5rem', textAlign: 'justify' }}>Our vision is to provide affordable, professional, and highly effective Online Counselling services to a wide range of clients that cuts across different divides.</p>
        </div>
        <div>
          <h2 style={{ margin: '20px', fontSize: '2.5rem' }}>Our Mission</h2>
          <p style={{ margin: '20px', fontSize: '1.5rem', textAlign: 'justify' }}>Our mission is to promote mental health awareness, reduce stigma, and offer a platform for individuals to connect, share experiences, and support each other in their mental health journeys. Through education and advocacy, we strive to empower individuals to prioritize their mental well-being. By fostering a community that values open dialogue and empathy, we aim to create a safe space where everyone feels heard and understood. Together, we work towards building a society that recognizes the importance of mental health and promotes inclusivity and compassion.</p>
        </div>
      </div>
    </body>
  )
}

export default About;