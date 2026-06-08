import './Experience.css';

function AboutMe() {
    return (
        <div className="modal-content-container about-me-container">
            <div className="section-container">
                <div className='header'>
                    <h3>ABOUT ME</h3>
                </div>
                <div className="paragraph">
                    <p>Hi, I&apos;m Mandy. I work at the intersection of <a className="keyword-link">capital strategy</a> and <a className="keyword-link">automation</a>, blending <a className="keyword-link">structured finance</a>, <a className="keyword-link">treasury</a>, and <a className="keyword-link">engineering</a> together. My focus spans structuring <a className="keyword-link">asset-based and M&A deals</a> with data, automating <a className="keyword-link">lender compliance reporting</a>, owning <a className="keyword-link">capital allocation and forecasting</a>, and building the tools that <a className="keyword-link">maximize margin and liquidity</a>.</p>
                </div>
                <div className="paragraph">
                    <p>Most recently at <a className="company-link" href="https://www.getparker.com" target="_blank" rel="noreferrer">Parker</a>, I built a <a className="keyword-link">liquidity forecast model with less than 2% variance</a> across SPV structures and payment rails, and automated a <a className="keyword-link">compliance reporting pipeline</a> that removed a full manual workload. At <a className="company-link" href="https://www.dailypay.com" target="_blank" rel="noreferrer">DailyPay</a>, I helped secure <a className="keyword-link">$600M+ in funding</a> and automated <a className="keyword-link">ABL collateral pool evaluation</a>, working closely with <a className="keyword-link">cross-functional teams</a> to manage credit risks and improve margin by changing product operations.</p>
                </div>
                <div className="paragraph">
                    <p>The technical side is what makes the finance work scale. I build in <a className="keyword-link">Python and SQL</a>, with <a className="keyword-link">Snowflake and AWS</a>, and use <a className="keyword-link">APIs and Claude Code</a> to turn manual processes into efficient systems.</p>
                </div>
                <div className="paragraph">
                    <p>Outside of work, I enjoy Chinese chess, badminton, modern art, opera, and experimenting with new cooking recipes.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
