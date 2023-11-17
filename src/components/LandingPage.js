import '../css/lpcomponents/LandingPage.css';
import Footer from './lpcomponents/Footer.js';
import NavBar from './lpcomponents/NavBar.js';

const LandingPage = () => {
  return (
    <main>
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
      <article className='doctorContainer' id='doctors'>
        Psychologists
      </article>
      <article className="consultationModeContainer">
        Consultaion Modes
      </article>
      <Footer />
    </main>
  )
}

export default LandingPage;