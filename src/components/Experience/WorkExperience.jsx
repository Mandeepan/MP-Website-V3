import { useState } from 'react';
import './Experience.css';

const entries = [
  {
    title: "Capital Markets & Treasury Director",
    company: "Parker",
    period: "2025 – 2026",
    summary: "Owned capital strategy and the systems behind it, including a cash forecast model within 2% variance and a compliance pipeline that removed a full manual workload.",
    tags: ["Python", "SQL", "Snowflake", "Retool", "ABL", "M&A"],
    detail: "Engineered a cash forecast model within 2% variance, incorporating flow of funds across SPV and parent structures and payment rails (ACH, wires, RTP). Built an internal web app tracking real-time cash balances, collateral pool values, and credit facility KPIs. Automated a compliance pipeline in Python and SQL with PDF and email delivery, eliminating a previously full-time manual workload. Supported the CFO across the full M&A process (CIM, due diligence, definitive agreement) and maintained investor relationships.",
  },
  {
    title: "Software Engineering Bootcamp",
    company: "App Academy",
    period: "2024",
    summary: "Six-month full-time bootcamp in full-stack development.",
    tags: ["React", "Flask", "SQLAlchemy", "AWS S3", "OpenAI API"],
    detail: "Completed a rigorous full-time programme covering full-stack web development. Built scalable web applications using React, Flask, and SQLAlchemy. Integrated external APIs including OpenAI and CrunchBase, and worked with AWS S3 for file storage. Collaborated in teams using Agile methodologies.",
  },
  {
    title: "Senior Capital Markets Quantitative Manager",
    company: "DailyPay",
    period: "2021 – 2024",
    summary: "Helped secure $600M+ in funding and automated ABL collateral evaluation, while co-leading treasury and liquidity forecasting.",
    tags: ["Python", "SQL", "Tableau", "ABL", "Treasury"],
    detail: "Worked with cross-functional teams to secure $600M+ in capital funding, unlocking an extra 5% of cash reserves for liquidity. Designed and maintained an automated system for ABL collateral pool evaluation to optimize funding efficiency. Built a Tableau dashboard with sentiment analysis to detect adverse news, cutting default risk assessment time by 80%. Co-led treasury operations including liquidity forecasting, capital allocation, cost-of-funds analysis, and system integration.",
  },
  {
    title: "Quantitative Research",
    company: "Quant Global Capital Advisors",
    period: "2018 – 2019",
    summary: "Built a Russell 1000 stock-classification system using K-Means clustering and automated factor capture, transformation, and backtesting to streamline alpha generation.",
    tags: ["Python", "SQL", "Machine Learning", "Sentiment Analysis", "Bloomberg Terminal"],
    detail: "Optimized the alpha-generation process across data transformation, factor capturing, backtesting, simulation, and stress testing. Developed a market-rotation trading strategy for Russell 1000 stocks using K-Means clustering, improving the efficiency of quantitative analyses.",
  },
  {
    title: "Finance Analyst",
    company: "Acceleration Capital Group",
    period: "2017 – 2018",
    summary: "Ran due diligence on investment opportunities, backtested strategies, and built investor pitch decks, using data-driven insights to support portfolio managers.",
    tags: ["Python", "Excel", "Portfolio Analysis", "Due Diligence", "VaR"],
    detail: "Conducted due diligence on investment opportunities, back-tested trading strategies, and prepared comprehensive pitch decks for prospective investors. Used data-driven insights to support portfolio managers in optimizing fund performance.",
  },
  {
    title: "Algorithmic Trading Intern",
    company: "ARB Group",
    period: "2016",
    summary: "Designed and executed algorithmic trading strategies focused on execution efficiency and profitability.",
    tags: ["Python", "Algorithmic Trading", "Backtesting"],
    detail: "Designed and executed algorithmic trading strategies focused on optimizing execution efficiency and profitability, analyzing large datasets to identify trading opportunities and inform strategy.",
  },
  {
    title: "MS, Mathematical Finance",
    company: "Boston University — Questrom School of Business",
    period: "2015 – 2017",
    summary: "Graduate programme in quantitative finance, derivatives, and risk modelling.",
    tags: ["Stochastic Calculus", "Fixed Income", "Credit Risk", "Derivatives"],
    detail: "Specialized in quantitative methods, stochastic calculus, derivatives pricing, and risk modelling. Coursework covered fixed income securities, credit risk, structured products, and algorithmic trading — the theoretical foundation for the structured finance work that followed.",
  },
  {
    title: "Dip., C++ for Financial Engineering",
    company: "UC Berkeley — Haas School of Business",
    period: "2014",
    summary: "Intensive programme in numerical methods and C++ implementation of quantitative pricing models.",
    tags: ["C++", "Monte Carlo", "Finite Difference", "Derivatives Pricing"],
    detail: "Covered numerical methods for derivatives pricing including Monte Carlo simulation, finite difference methods, and C++ implementation of options and fixed income pricing models.",
  },
  {
    title: "BSc (Hons), Investment & Financial Risk Management",
    company: "City University London — Bayes Business School",
    period: "2011 – 2014",
    summary: "Undergraduate degree in portfolio theory, equity and fixed income analysis, derivatives, and risk management.",
    tags: ["Portfolio Theory", "Derivatives", "Risk Management", "Fixed Income"],
    detail: "Core studies in portfolio theory, equity and fixed income analysis, derivatives, and risk management frameworks. Graduated with Honours.",
  },
];

function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div className="modal-content-container">
      <div className="section-container">
        <div className="header"><h3>JOURNEY</h3></div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {entries.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const isExpanded = expandedIndex === i;

            const card = (
              <div className={`timeline-card${!isLeft ? ' timeline-card--right' : ''}`}>
                <div className="timeline-title">{entry.title}</div>
                <div className="timeline-company">@ {entry.company}</div>
                <p className="timeline-summary">{entry.summary}</p>
                <div className={`skill-tabs${!isLeft ? ' skill-tabs--right' : ''}`}>
                  {entry.tags.map((tag, j) => <p key={j}>{tag}</p>)}
                </div>
                <button
                  className={`timeline-expand-btn${!isLeft ? ' timeline-expand-btn--right' : ''}`}
                  onClick={() => toggle(i)}
                >
                  {isExpanded ? 'Show less ↑' : 'Show more ↓'}
                </button>
                {isExpanded && (
                  <p className={`timeline-detail${!isLeft ? ' timeline-detail--right' : ''}`}>
                    {entry.detail}
                  </p>
                )}
              </div>
            );

            const date = <span className="timeline-period">{entry.period}</span>;

            return (
              <div key={i} className={`timeline-entry${!isLeft ? ' timeline-entry--right' : ''}`}>
                <div className="tl-col-left">
                  {isLeft ? date : card}
                </div>
                <div className="timeline-dot" />
                <div className="tl-col-right">
                  {isLeft ? card : date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
