import React from 'react';
import AllHeader from '../lpcomponents/AllHeader';
import '../../css/rootcomp/Services.css';

const Services = () => {
  return (
    <body className='bgBody'>
      <AllHeader />
      <h1 style={{ position: 'fixed', top: '0px' }}>Services</h1>
      <div className="postsDivContainer" style={{paddingTop:'3rem'}}>
      <div className="container mt-5 row">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center' , color:'blue' }}>Personal Forms <br/> ( POST )</h2>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}} >ManaM utilizes personal forms to gather essential information from users seeking assistance. These forms typically include questions about personal history, current mental health concerns, and relevant details such as stressors or triggers. Users may also provide information about their preferences for therapy approaches and therapist characteristics. The completion of these forms aids mental health professionals in better understanding the user's situation, enabling more targeted and effective support. These confidential forms enhance the efficiency of virtual consultations by allowing therapists to prepare adequately and tailor their approach to meet the user's specific needs and concerns.</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center', color:'blue' }}>Confession Forum</h2>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}}>Confession forums on ManaM provide a unique space for individuals to anonymously share their deepest and most personal struggles, offering a cathartic outlet for emotional release. These forums encourage users to unburden themselves from feelings of guilt or shame, fostering a non-judgmental community where members can find understanding and support for their most vulnerable moments. In these confession forums, the veil of anonymity allows users to explore and confront their innermost thoughts, contributing to a sense of liberation and collective empathy within the online mental health community.</p>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center', color:'blue' }}>Appointment Bookings</h2>
                <p className="card-text"style={{fontSize:'1rem', textAlign:'justify'}}>ManaM facilitates appointment bookings by providing a user-friendly platform for individuals to schedule virtual consultations with mental health professionals. Users can access a calendar, select preferred dates and times, and sometimes specify their preferred therapist. These platforms often integrate secure video conferencing tools for seamless virtual sessions, ensuring privacy and confidentiality. Automated reminders enhance adherence, and some sites allow users to fill out preliminary assessments before appointments. This streamlined process enhances accessibility, convenience, and the overall user experience, fostering a supportive environment for those seeking mental health assistance online.</p>
              </div>
            </div>
        </div>
      </div>
      <h1 className='servicesTitle2'>MENTAL HEALTH PROBLEMS THAT WE SOLVE</h1>
      <div className="container mt-5 row">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center' , color:'blue' }}>Depression</h2>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}} >Depression, a prevalent mental health problem, is characterized by persistent feelings of sadness, hopelessness, and a pervasive lack of interest or pleasure in daily activities. It goes beyond occasional mood fluctuations, impacting one's ability to function in daily life. Individuals with depression may experience changes in sleep patterns, appetite, and energy levels. Concentration and decision-making abilities can also be impaired. Depression varies in severity, and factors such as genetics, biology, environment, and life events contribute to its onset. Seeking professional help, through therapy or medication, is crucial for effective management and recovery from this debilitating condition.</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center', color:'blue' }}>Anxiety Disorders</h2>
                <p className="card-text" style={{fontSize:'1rem', textAlign:'justify'}}>Anxiety disorders encompass a range of conditions, including generalized anxiety disorder, panic disorder, and social anxiety. These disorders are characterized by excessive worry, fear, or apprehension that goes beyond what is considered normal. Generalized anxiety disorder involves chronic and exaggerated worry about everyday events, while panic disorder manifests as sudden, intense periods of fear and physical discomfort. Social anxiety revolves around an intense fear of social situations. These conditions can significantly impact daily functioning, relationships, and overall well-being. Factors such as genetics, brain chemistry, and life experiences contribute to the development of anxiety disorders.</p>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title" style={{textAlign:'center', color:'blue' }}>Schizophrenia</h2>
                <p className="card-text"style={{fontSize:'1rem', textAlign:'justify'}}>Schizophrenia is a complex mental health disorder involving distorted thinking, hallucinations, and delusions that profoundly affect a person's perception of reality. These symptoms often lead to impaired social and occupational functioning. Distorted thoughts can create challenges in distinguishing between what is real and what is not. Hallucinations, involving sensory perceptions without external stimuli, and delusions, persistent false beliefs, contribute to the severity of the condition. Schizophrenia's impact extends beyond the individual to affect relationships, work, and etc. The exact cause remains unclear, a combination of genetic, neurological, and environmental factors contributes to its development.</p>
              </div>
            </div>
        </div>
      </div>
      </div>
    </body>
  )
}

export default Services