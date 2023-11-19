import React from 'react';
import AllHeader from '../lpcomponents/AllHeader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/rootcomp/Services.css';

const Services = () => {
  return (
    <body className='bgBody'>
      <AllHeader />
      <h1 style={{ position: 'fixed', top: '0px' }}>Services</h1>
      <div className="postsDivContainer" style={{paddingTop:'3rem'}}>
      <div className="container mt-5">
        <div className="row">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center' , color:'blue' }}>Personal Forms <br/> ( POST )</h1>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}} >ManaM utilizes personal forms to gather essential information from users seeking assistance. These forms typically include questions about personal history, current mental health concerns, and relevant details such as stressors or triggers. Users may also provide information about their preferences for therapy approaches and therapist characteristics. The completion of these forms aids mental health professionals in better understanding the user's situation, enabling more targeted and effective support. These confidential forms enhance the efficiency of virtual consultations by allowing therapists to prepare adequately and tailor their approach to meet the user's specific needs and concerns.</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center', color:'blue' }}>Confession Forum</h1>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}}>Confession forums on ManaM provide a unique space for individuals to anonymously share their deepest and most personal struggles, offering a cathartic outlet for emotional release. These forums encourage users to unburden themselves from feelings of guilt or shame, fostering a non-judgmental community where members can find understanding and support for their most vulnerable moments. In these confession forums, the veil of anonymity allows users to explore and confront their innermost thoughts, contributing to a sense of liberation and collective empathy within the online mental health community.</p>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center', color:'blue' }}>Appointment Bookings</h1>
                <p className="card-text"style={{fontSize:'1rem', textAlign:'justify'}}>ManaM facilitates appointment bookings by providing a user-friendly platform for individuals to schedule virtual consultations with mental health professionals. Users can access a calendar, select preferred dates and times, and sometimes specify their preferred therapist. These platforms often integrate secure video conferencing tools for seamless virtual sessions, ensuring privacy and confidentiality. Automated reminders enhance adherence, and some sites allow users to fill out preliminary assessments before appointments. This streamlined process enhances accessibility, convenience, and the overall user experience, fostering a supportive environment for those seeking mental health assistance online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      
      <h2 style={{textAlign:'center'}}>MENTAL HEALTH PROBLEMS THAT WE SOLVE</h2>
      <div className="container mt-5">
        <div className="row">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center' , color:'blue' }}>Personal Forms <br/> ( POST )</h1>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}} >ManaM utilizes personal forms to gather essential information from users seeking assistance. These forms typically include questions about personal history, current mental health concerns, and relevant details such as stressors or triggers. Users may also provide information about their preferences for therapy approaches and therapist characteristics. The completion of these forms aids mental health professionals in better understanding the user's situation, enabling more targeted and effective support. These confidential forms enhance the efficiency of virtual consultations by allowing therapists to prepare adequately and tailor their approach to meet the user's specific needs and concerns.</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center', color:'blue' }}>Confession Forum</h1>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}}>Confession forums on ManaM provide a unique space for individuals to anonymously share their deepest and most personal struggles, offering a cathartic outlet for emotional release. These forums encourage users to unburden themselves from feelings of guilt or shame, fostering a non-judgmental community where members can find understanding and support for their most vulnerable moments. In these confession forums, the veil of anonymity allows users to explore and confront their innermost thoughts, contributing to a sense of liberation and collective empathy within the online mental health community.</p>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title" style={{textAlign:'center', color:'blue' }}>Appointment Bookings</h1>
                <p className="card-text"style={{fontSize:'1rem', textAlign:'justify'}}>ManaM facilitates appointment bookings by providing a user-friendly platform for individuals to schedule virtual consultations with mental health professionals. Users can access a calendar, select preferred dates and times, and sometimes specify their preferred therapist. These platforms often integrate secure video conferencing tools for seamless virtual sessions, ensuring privacy and confidentiality. Automated reminders enhance adherence, and some sites allow users to fill out preliminary assessments before appointments. This streamlined process enhances accessibility, convenience, and the overall user experience, fostering a supportive environment for those seeking mental health assistance online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </body>
  )
}

export default Services