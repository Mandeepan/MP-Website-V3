import './Experience.css';

const experience0 = "Completed a rigorous 6-month, full-time software engineering bootcamp, gaining expertise in full-stack web development. Developed scalable web applications using modern technologies such as React, Flask, and SQLAlchemy. Integrated external APIs (e.g., OpenAI, CrunchBase) and AWS S3 for enhanced functionality. Collaborated in teams using Agile methodologies, hosting daily stand-ups, and managing debugging processes.";
const experience1 = "Structured Asset-Backed Lending (ABL) and Securitization (ABS) facilities to optimize financial operations. Automated compliance reporting using Python and SQL, significantly reducing manual workload. Built Tableau dashboards integrated with Generative AI and sentiment analysis to assess adverse news, mitigating portfolio default risks. Co-led the Treasury team, optimizing capital allocation through liquidity projection and cost analysis.";
const experience2 = "Developed and implemented a Russell 1000 stock classification system using K-Means Clustering to identify potential trading strategies. Streamlined alpha generation by automating factor capturing, data transformation, and model backtesting, enhancing the efficiency of quantitative analyses.";
const experience3 = "Conducted due diligence on investment opportunities, back-tested trading strategies, and prepared comprehensive pitch decks for prospective investors. Utilized data-driven insights to support portfolio managers in optimizing fund performance.";
const experience4 = "Designed and executed algorithmic trading strategies, focusing on optimizing execution efficiency and profitability. Analyzed large datasets to identify trading opportunities and trends. Assisted in developing tools for managing trading risk and improving portfolio performance.";
const experience5 = "Conducted intra-day discretionary trading on commodity futures and risk analysis.";

function WorkExperience() {
    return (
        <div className="modal-content-container">
            {/* Experience Section */}
            <div className="section-container">
                <div className='header'>
                    <h3>EXPERIENCE</h3>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>JUN - DEC 2024</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Software Engineering Full-time Student @ App Academy</p></div>
                        <div className="experience-paragraph"><p>{experience0}</p></div>
                        <div className="skill-tabs">
                            <p>React</p><p>Flask</p><p>SQLAlchemy</p><p>OpenAI API</p><p>AWS S3</p>
                        </div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>2021 - JUN 2024</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Senior Capital Markets Quantitative Manager @ DailyPay</p></div>
                        <div className="experience-paragraph"><p>{experience1}</p></div>
                        <div className="skill-tabs">
                            <p>Python</p><p>SQL</p><p>Tableau</p><p>Generative AI</p><p>Google Cloud API</p>
                        </div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>2018 - MAY 2019</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Quantitative Research @ Quant Global Capital Advisors</p></div>
                        <div className="experience-paragraph"><p>{experience2}</p></div>
                        <div className="skill-tabs">
                            <p>Python</p><p>SQL</p><p>Machine Learning</p><p>Sentiment Analysis</p><p>Bloomberg Terminal</p><p>S&P IQ Capital</p>
                        </div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>2017 - MAY 2019</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Finance Analyst @ Acceleration Capital Group</p></div>
                        <div className="experience-paragraph"><p>{experience3}</p></div>
                        <div className="skill-tabs">
                            <p>Python</p><p>Excel</p><p>Portfolio Analysis</p><p>Due Diligence</p><p>VaR(Value at Risk)</p>
                        </div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>JUN - AUG 2016</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Algorithmic Trading Intern @ ARB Group</p></div>
                        <div className="experience-paragraph"><p>{experience4}</p></div>
                        <div className="skill-tabs">
                            <p>R</p><p>Python</p><p>Excel</p><p>Statistical Arbitrage</p>
                        </div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>AUG - OCT 2014</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Trading Intern @ Amplify Trading</p></div>
                        <div className="experience-paragraph"><p>{experience5}</p></div>
                        <div className="skill-tabs">
                            <p>Excel</p><p>Technical Analysis</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="section-container">
                <div className='header'>
                    <h3>EDUCATION</h3>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>2015 - 2017</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>MSc. Mathematical Finance</p></div>
                        <div className="experience-paragraph"><p>Questrom Business School, Boston University.</p></div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>JAN - MAY 2014</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>Dip.C++ Programming for Financial Engineering</p></div>
                        <div className="experience-paragraph"><p>Haas School of Business, University of California, Berkeley.</p></div>
                    </div>
                </div>
                <div className="section-row-container">
                    <div className="timeline-box"><p>2011 - 2014</p></div>
                    <div className="experience-container">
                        <div className="experience-title"><p>BSc(Hons). Investment & Financial Risk Management</p></div>
                        <div className="experience-paragraph"><p>Bayes Business School (formerly Cass), City University of London.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
