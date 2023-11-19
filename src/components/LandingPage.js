import '../css/lpcomponents/LandingPage.css';
import PsychologistCard from './Psychologistcard.js';
import Footer from './lpcomponents/Footer.js';
import NavBar from './lpcomponents/NavBar.js';

const psychologistsData = [
  { name: 'Dr. Smith', expertise: 'Clinical Psychology' },
  { name: 'Dr. Johnson', expertise: 'Counseling Psychology' },
  { name: 'Dr. Olivia Martinez', expertise: 'Child Psychology' },
  { name: 'Prof. Jonathan Davis', expertise: 'Cognitive Neuroscience' },
  { name: 'Dr. Emily Thompson', expertise: 'Behavioral Therapy' },
];

const LandingPage = () => {
  const splitIndex = Math.ceil(psychologistsData.length / 2);
  const leftPsychologists = psychologistsData.slice(0, splitIndex);
  const rightPsychologists = psychologistsData.slice(splitIndex);

  return (
    <main >
      <NavBar />
      <article className='titleContainer'>
        <aside className='siteName'>ManaM</aside>
        <aside className='tagLine'>There is always hope, 
        <br />
        even in the bleakest moments</aside>
      </article>
      <article className="chatbotContainer">
        <img src="" alt="" />
      </article>
      <section className='bgChange1'>
        <article className='doctorContainer' id='doctors'>
          <div className="doctorContentContainer">
            <h1 style={{fontSize:'2rem'}}>Our Top 5 Psychologists</h1>
            <div className="psychologistsListContainer">
              <div className="psychologistsList">
                {leftPsychologists.map((psychologist, index) => (
                  <div key={index}>
                    <PsychologistCard {...psychologist} />
                  </div>
                ))}
              </div>
              <div className="psychologistsList">
                {rightPsychologists.map((psychologist, index) => (
                  <div key={index + splitIndex}>
                    <PsychologistCard {...psychologist} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className='consultationModeContainer'>
          <div className="consultationContentContainer ">
            <h2>Consultation Modes</h2>
            <div className="consultationModesList">
              <div className="imageCon">
                <div className="consultationMode im1">
                </div>
                <p className='modeText'>Forum</p>
              </div>
              <div className="imageCon">
                <div className="consultationMode im">
                </div>     
                <p className='modeText'>Voice call</p>   
              </div>
              <div className="imageCon">
                <div className="consultationMode im2">
                </div>
                <p className='modeText'>Video call</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  )
}

export default LandingPage;