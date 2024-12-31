
import './Home.css';
import { useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/profile.jpg';
import Modal from '../Modal/Modal';
import Experience from "../Experience"
import Projects from "../Projects"
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";





const socialIcons={
  linkedIn: "linkedin-icon.svg",
  github:"github-icon.svg",
  email:"email-icon.svg",
  medium:"medium-icon.svg",
  twitter:"twitter-icon.svg"
}

const Home = () => {
  // const navigate = useNavigate();
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);


  return (
    <div>
      <main>
        <div className="bg">
          <div></div>
          <div></div>
        </div>
        <section className="profile-section">
          <img src={profileImage} alt="Profile Picture" className="profile-pic" />
        </section>
        <div className="header-text" aria-hidden="true">
          <p>Hi, my name is</p>
          <span className="glow-filter" data-text="Illuminated Glow Text.">Mandy Pan.</span>
          <p>I am a full-stack software engineer,</p>
          <p>with experience in Quantitative Finance and Fintech.</p>
        </div>
        <section className="buttons">
          <button onClick={() => setIsExperienceModalOpen(true)}>About Me</button>
          <button onClick={() => setIsProjectsModalOpen(true)}>Projects</button>
          {/* Experience Modal - Slides from Left */}
          <Modal
            isOpen={isExperienceModalOpen}
            onClose={() => setIsExperienceModalOpen(false)}
            direction="left"
          >
            <Experience />
            <div className="left-modal-footer-container">
            <button className="left-modal-close-button" onClick={() => setIsExperienceModalOpen(false)}>Back <AiFillCaretRight /></button>
            </div>
          </Modal>

          {/* Projects Modal - Slides from Right */}
          <Modal
            isOpen={isProjectsModalOpen}
            onClose={() => setIsProjectsModalOpen(false)}
            direction="right"
          >
            <Projects />
            <div className="right-modal-footer-container">
              <button className="right-modal-close-button" onClick={() => setIsProjectsModalOpen(false)}><AiFillCaretLeft /> Back</button>
            </div>
          </Modal>
        </section>
        <section className="social-links">
          <a href="https://www.linkedin.com/in/mandycpan/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <img src={socialIcons.linkedIn} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Mandeepan" target="_blank" aria-label="GitHub" rel="noreferrer">
            <img src={socialIcons.github} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://x.com/MandyPoonCM" target="_blank" aria-label="Twitter" rel="noreferrer">
            <img src={socialIcons.twitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://medium.com/@mandyphc" target="_blank" aria-label="Medium" rel="noreferrer">
            <img src={socialIcons.medium} alt="Medium" className="social-icon" />
          </a>
          <a href="mailto:imandypan@gmail.com" aria-label="Send an email to Mandy Pan">
            <img src={socialIcons.email} alt="Email icon" className="social-icon" />
          </a>
        </section>
      </main> 
    </div>
  );
};

export default Home;