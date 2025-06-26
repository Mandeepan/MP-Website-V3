import './Projects.css';
import { FaGithub } from "react-icons/fa";


const project1="An equity momentum trading strategy targeting on US public stocks, and aiming to profit from the observed sluggishness of stock prices to fully reflect earnings news."
const project2="An automation tool assessing the creditworthiness of Small and Medium-sized Enterprises (SMEs) to determine their likelihood of defaulting on financial obligations."
const project3="An leading indicator for bitcoin prices with real-time tick data from various cryptocurrency exchanges using WebScoket. It involved fetching JSON tick-data using Python and optimizing factor weights to predict future price movements."
const project4="A machine learning model that predicts credit card customer default by integrating personal information with macroeconomic indicators. Utilizing a voting ensemble of Logistic Regression, Random Forest, and Naïve Bayes, the model aims to enhance risk assessment and mitigate potential bank losses."
const project5="A statistical arbitrage trading strategy identifying co-integration relationships between gold futures and ETFs. Trading opportunities were further validated by incorporating sentiment analysis on tweets from the Fed speakers and the US president"

function OtherProjects(){
    return (
        <div className="modal-content-container">
            <div className="divider"></div>
            <div className="section-container" >
                <div className='header'>
                    <h3>DATA ANLYTICS & QUANTITATIVE MODELLING</h3>
                </div>
                {/* Project 1 */}
                <div className="section-row-container">
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-name">Post Earning Announcement Drift(PEAD) Equity Momentum Trading Strategy</a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project1}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Polygon API</p>
                            <p>Time Series Analysis</p>
                            <p>Portfolio Optimization</p>
                        </div>
                        {/* <div className="github-box" onClick={() => window.open('https://github.com/Mandeepan/SimplyOptions', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* Project 2*/}
                <div className="section-row-container">
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-name">Credit Risk Evaluation on SMEs</a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project2}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Tableau</p>
                            <p>Salesforce API</p>
                            <p>Data Transformation</p>
                            <p>Value At Risk</p>
                            <p>Expected Shortfalls</p>
                        </div>
                        {/* <div className="github-box" onClick={() => window.open('https://github.com/Mandeepan/SimplyOptions', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* Project 3*/}
                <div className="section-row-container">
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-name">Bitcoin Leading Price Index Construction</a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project3}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>JSON</p>
                            <p>WebSocket API</p>
                            <p>Statistical Forecasting</p>
                        </div>
                        {/* <div className="github-box" onClick={() => window.open('https://github.com/Mandeepan/SimplyOptions', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* Project 4*/}
                <div className="section-row-container">
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-name">Credit Approval Voting Model with Machine Learning</a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project4}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Jupyter Notebook</p>
                            <p>Exploratory Data Analysis(EDA)</p>
                            <p>Classification ML Models</p>
                            <p>Model Training & Validation</p>
                            <p>K-Fold Cross Validation</p>
                        </div>
                        <div className="github-box" onClick={() => window.open('https://github.com/Mandeepan/Data-Science', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project 5*/}
                <div className="section-row-container">
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-name">Pair Trading Gold Futures & ETF with Macro Semiment Analysis</a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project5}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Statistical Arbitrage</p>
                            <p>Sentiment Analysis</p>
                        </div>
                        {/* <div className="github-box" onClick={() => window.open('https://github.com/Mandeepan/Data-Science', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* Extra Project Placeholder*/}
            </div>
        </div>
    )
}

export default OtherProjects;