import './Experience.css';

function AboutMe() {
    return (
        <div className="modal-content-container about-me-container">
            <div className="section-container">
                <div className='header'>
                    <h3>ABOUT ME</h3>
                </div>
                <div className="paragraph">
                    <p>Hi, I&apos;m Mandy! I&apos;m a hybrid Data & Software Engineer with a unique blend of expertise in quantitative analytics and a passion for creating innovative FinTech solutions. My focus lies at the intersection of <a className="keyword-link">developing impactful software applications, building systematic, data-driven processes, and generating strategic data insights</a>.</p>
                </div>
                <div className="paragraph">
                    <p>Previously, at DailyPay and Quant Global Capital Advisors, I honed my analytical and engineering acumen by creating <a className="keyword-link">data-driven systems for structured finance</a>, evaluating new product features with <a className="keyword-link">cross-functional</a> teams, and developing <a className="keyword-link">machine learning-powered trading strategies</a>.</p>
                </div>
                <div className="paragraph">
                    <p>My recent projects, including a Robinhood Clone and SimplyOptions, further demonstrate my technical proficiency across <a className="keyword-link">Python, SQL, JavaScript, React, Flask, and Redux</a>, complemented by my knowledge in <a className="keyword-link">leveraging APIs for efficient data integration, and utilizing updated LLM models</a>. I am currently working on building an AI Agent to extract unstructured data.</p>
                </div>
                <div className="paragraph">
                    <p>Outside of work, I enjoy badminton, hiking, exploring museums, and experimenting with new recipes.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
