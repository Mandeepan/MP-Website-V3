import './Home.css';
import profileImage from '../../assets/images/profile.jpg';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="home-panel-inner">
      <main>
        <section className="profile-section">
          <img src={profileImage} alt="Profile Picture" className="profile-pic" />
        </section>
        <div className="header-text" aria-hidden="true">
          <p>Hi, my name is</p>
          <span className="glow-filter" data-text="Illuminated Glow Text.">Mandy Pan.</span>
          <p>I am a hybrid Data & Software Professional,</p>
          <p>with experience in FinTech and Quantitative Finance.</p>
        </div>
        <section className="social-links">
          <a href="https://www.linkedin.com/in/mandycpan/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Mandeepan" target="_blank" aria-label="GitHub" rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://x.com/MandyPoonCM" target="_blank" aria-label="Twitter / X" rel="noreferrer">
            <FaXTwitter className="social-icon" />
          </a>
          <a href="https://medium.com/@mandyphc" target="_blank" aria-label="Medium" rel="noreferrer">
            <FaMedium className="social-icon" />
          </a>
          <a href="mailto:imandypan@gmail.com" aria-label="Send an email to Mandy Pan">
            <HiMail className="social-icon" />
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
