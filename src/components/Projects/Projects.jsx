import './Projects.css';
import goVocayImage from '../../assets/images/GoVocay.png';
import robinhoodCloneImage from '../../assets/images/RobinhoodClone.png';
import simplyOptionsImage from '../../assets/images/SimplyOptions.png';
import { HiOutlineExternalLink } from "react-icons/hi";


function Projects(){
    return (
        <div className="modal-content-container">
            <div className="section-container" >
                <div className='header'>
                    <h3>PROJECTS</h3>
                </div>
                {/* Project 1*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={simplyOptionsImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://simplyoptions.onrender.com/" rel="noreferrer" target="_blank">SimplyOptions <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p> learning building flash python app and manage database lbnfjsdnfansfohaspdfkdsjfnhgiupajsndfaijsfdknaslblasdfbashilfjkasdhfibjansbhvasvhiawkvldshaklvhi</p>
                        </div>
                        <div className="skill-tabs">
                            <p>JavaScript</p>
                            <p>Express.JS</p>
                            <p>Squelize ORM</p>
                            <p>Vite</p>
                            <p>SQLite</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                {/* Project 2*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={robinhoodCloneImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://robinhoodclone.onrender.com/" rel="noreferrer" target="_blank">Robinhood Clone <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p> learning building flash python app and manage database lbnfjsdnfansfohaspdfkdsjfnhgiupajsndfaijsfdknaslblasdfbashilfjkasdhfibjansbhvasvhiawkvldshaklvhi</p>
                        </div>
                        <div className="skill-tabs">
                            <p>JavaScript</p>
                            <p>Express.JS</p>
                            <p>Squelize ORM</p>
                            <p>Vite</p>
                            <p>SQLite</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                {/* Project 3*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={goVocayImage}></img>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://api-project-auth.onrender.com/" rel="noreferrer" target="_blank">GoVocay <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p> learning building flash python app and manage database lbnfjsdnfansfohaspdfkdsjfnhgiupajsndfaijsfdknaslblasdfbashilfjkasdhfibjansbhvasvhiawkvldshaklvhi</p>
                        </div>
                        <div className="skill-tabs">
                            <p>JavaScript</p>
                            <p>Express.JS</p>
                            <p>Squelize ORM</p>
                            <p>Vite</p>
                            <p>SQLite</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;