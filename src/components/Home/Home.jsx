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
          <img src={profileImage} alt="Mandy Pan" className="profile-pic" />
        </section>

        <div className="header-text">
          <p className="greeting">Hi, I&apos;m</p>
          <h1 className="name glow-filter">Mandy Pan.</h1>
          <p className="headline">2 skill sets that rarely live in 1 person: <strong>a capital markets brain</strong> & <strong>builder&apos;s hands</strong>.</p>
          <p className="positioning">
            I structure asset-based finance and ship the systems that run it.
          </p>
          <ul className="metrics">
            <li>
              <span className="metric-value">$600M+</span>
              <span className="metric-label">capital raised</span>
            </li>
            <li>
              <span className="metric-value">&lt;2%</span>
              <span className="metric-label">cash forecast variance</span>
            </li>
            <li>
              <span className="metric-value">80%</span>
              <span className="metric-label">faster risk assessment</span>
            </li>
          </ul>
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
