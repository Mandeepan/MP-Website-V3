import './Projects.css';
import goVocayImage from '../../assets/images/GoVocay.png';
import robinhoodCloneImage from '../../assets/images/RobinhoodClone.png';
import simplyOptionsImage from '../../assets/images/SimplyOptions.png';
import { HiOutlineExternalLink } from "react-icons/hi";

const project1="A platform streamlining private share trading with secure API integrations. Built with React, Redux, Flask, PostgreSQL, OpenAI API, CrunchBase API and AWS S3."
const project2="A trading simulation app offering dynamic graphs and themes(Dark vs. Light). Developed using React, Flask, PostgreSQL, and Redux."
const project3="A booking platform for stays with seamless UX. Created with Express.js, HTML, CSS, Sequelize ORM, and PostgreSQL."

function Projects(){
    return (
        <div className="modal-content-container">
            <div className="section-container" >
                <div className='header'>
                    <h3>PROJECTS</h3>
                </div>
                {/* Project 1*/}
                <div className="section-row-container">
                    <div className="screenshot-box" onClick={() => window.open('https://github.com/Mandeepan/SimplyOptions', '_blank', 'noopener,noreferrer')}>
                        <img src={simplyOptionsImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://simplyoptions.onrender.com/" rel="noreferrer" target="_blank">SimplyOptions <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project1}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Flask</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Framer</p>
                            <p>PostgreSQL</p>
                            <p>AWS S3</p>
                            <p>OpenAI API</p>
                            <p>CrunchBase API</p>
                        </div>
                    </div>
                </div>
                {/* Project 2*/}
                <div className="section-row-container">
                    <div className="screenshot-box" onClick={() => window.open('https://github.com/Mandeepan/RobinhoodClone', '_blank', 'noopener,noreferrer')}>
                        <img src={robinhoodCloneImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://robinhoodclone.onrender.com/" rel="noreferrer" target="_blank">Robinhood Clone <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project2}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Flask</p>
                            <p>Jinja</p>
                            <p>Vite</p>
                            <p>PostgreSQL</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Pipenv</p>
                            <p>React-Chart</p>
                        </div>
                    </div>
                </div>
                {/* Project 3*/}
                <div className="section-row-container">
                    <div className="screenshot-box" onClick={() => window.open('https://github.com/Mandeepan/API-project', '_blank', 'noopener,noreferrer')}>
                        <img src={goVocayImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://api-project-auth.onrender.com/" rel="noreferrer" target="_blank">GoVocay <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project3}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>JavaScript</p>
                            <p>Express.JS</p>
                            <p>Squelize ORM</p>
                            <p>Vite</p>
                            <p>SQLite</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Node.JS</p>
                            <p>Git & Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;