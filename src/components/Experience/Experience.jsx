import './Experience.css';

const experience0="Completed a rigorous 6-month, full-time software engineering bootcamp, gaining expertise in full-stack web development. Developed scalable web applications using modern technologies such as React, Flask, and SQLAlchemy. Integrated external APIs (e.g., OpenAI, CrunchBase) and AWS S3 for enhanced functionality. Collaborated in teams using Agile methodologies, hosting daily stand-ups, and managing debugging processes."
const experience1="Structured Asset-Backed Lending (ABL) and Securitization (ABS) facilities to optimize financial operations. Automated compliance reporting using Python and SQL, significantly reducing manual workload. Built Tableau dashboards integrated with Generative AI and sentiment analysis to assess adverse news, mitigating portfolio default risks. Co-led the Treasury team, optimizing capital allocation through liquidity projection and cost analysis."
const experience2="Developed and implemented a Russell 1000 stock classification system using K-Means Clustering to identify potential trading strategies. Streamlined alpha generation by automating factor capturing, data transformation, and model backtesting, enhancing the efficiency of quantitative analyses."
const experience3="Conducted due diligence on investment opportunities, back-tested trading strategies, and prepared comprehensive pitch decks for prospective investors. Utilized data-driven insights to support portfolio managers in optimizing fund performance."
const experience4="Designed and executed algorithmic trading strategies, focusing on optimizing execution efficiency and profitability. Analyzed large datasets to identify trading opportunities and trends. Assisted in developing tools for managing trading risk and improving portfolio performance."

function Experience(){
    return (
        <div className="modal-content-container">
            {/* About Me Section*/}
             <div className="section-container" >
                <div className='header'>
                    <h3>ABOUT ME</h3>
                </div>
                <div className="paragraph">
                    <p>Hi, I&apos;m Mandy! I&apos;m a full-stack software developer with a unique blend of expertise in software engineering and quantitative finance, driven by a passion for creating innovative FinTech solutions. After completing a rigorous 6-month software engineering bootcamp at <a className="keyword-link" href="https://www.appacademy.io/" rel="noreferrer" target="_blank">App Academy</a>, I am eager to contribute my skills to building scalable applications, leveraging APIs, and developing tools that empower businesses and users in the financial sector.</p>
                </div>
                <div className="paragraph">
                    <p>Previously, I honed my expertise through roles in trading and structured finance, including creating tools for financing projects at <a className="keyword-link" href="https://www.dailypay.com/" rel="noreferrer" target="_blank">DailyPay</a> and developing quantitative models at <a className="keyword-link" href="http://www.quantgloballlc.com/" rel="noreferrer" target="_blank">Quant Global Capital Advisors</a>. My recent projects, like a Robinhood Clone and SimplyOptions, showcase my technical proficiency in <a className="keyword-link" href="https://github.com/Mandeepan" rel="noreferrer" target="_blank">Python, JavaScript, React, Flask, Redux, and SQL</a>, as well as my commitment to delivering seamless user experiences.</p>
                </div>
                <div className="paragraph">
                    <p>Outside of work, I enjoy badminton, hiking, exploring museums, and experimenting with new recipes.</p>
                </div>
             </div>
             {/* Experience Section*/}
             <div className="section-container" >
                <div className='header'>
                    <h3>EXPERIENCE</h3>
                </div>
                {/* Study Experience 1*/}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>JUN - DEC 2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Software Engineering Full-time Student @ App Academy</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience0}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Flask</p>
                            <p>SQLAlchemy</p>
                            <p>OpenAI API</p>
                            <p>AWS S3</p>
                        </div>
                    </div>
                </div>
                {/* Experience 1*/}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2021 - JUN 2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Senior Capital Markets Quantitative Manager @ DailyPay</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience1}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>SQL</p>
                            <p>Tableau</p>
                            <p>Generative AI</p>
                            <p>Google Cloud API</p>
                        </div>
                    </div>
                </div>
                {/* Experience 2*/}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2018 - MAY 2019</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Quantitative Research @ Quant Global Capital Advisors</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience2}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>SQL</p>
                            <p>Machine Learning</p>
                            <p>Sentiment Analysis</p>
                            <p>Bloomberg Terminal</p>
                            <p>S&P IQ Capital</p>
                        </div>
                    </div>
                </div>
                {/* Experience 3*/}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2017 - MAY 2019</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Finance Analyst @ Acceleration Capital Group</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience3}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Python</p>
                            <p>Excel</p>
                            <p>Portfolio Analysis</p>
                            <p>Due Diligence</p>
                            <p>VaR(Value at Risk)</p>
                        </div>
                    </div>
                </div>
                {/* Experience 4*/}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>JUN - AUG 2016</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Algorithmic Trading Intern @ ARB Group</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience4}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>R</p>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>Statistical Arbitrage</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Experience;