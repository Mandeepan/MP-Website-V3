import { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    title: "Cash Forecasting & Liquidity Platform",
    org: "Parker",
    blurb: "Forecast model within 2% variance across SPV structures and payment rails, with a live dashboard tracking cash balances, collateral pool values, and credit facility KPIs.",
    categories: ["Capital Markets & Credit", "Automation"],
    tech: ["Python", "SQL", "Retool", "Snowflake"],
    proprietary: true,
  },
  {
    title: "Compliance Reporting Automation",
    org: "Parker",
    blurb: "Replaced a full manual reporting workload with a pipeline that builds and delivers borrower compliance reports as scheduled PDFs and email.",
    categories: ["Automation", "Capital Markets & Credit"],
    tech: ["Python", "SQL"],
    proprietary: true,
  },
  {
    title: "ABL Collateral Pool Evaluation",
    org: "DailyPay",
    blurb: "Automated asset-based lending collateral pool evaluation to optimize funding efficiency — part of the work supporting $600M+ raised.",
    categories: ["Capital Markets & Credit", "Automation"],
    tech: ["Python", "SQL", "Snowflake"],
    proprietary: true,
  },
  {
    title: "Counterparty Risk Dashboard",
    org: "DailyPay",
    blurb: "A Tableau dashboard using sentiment analysis to flag adverse news on counterparties, cutting default-risk assessment time by 80%.",
    categories: ["Data & Modelling", "Automation"],
    tech: ["Python", "Tableau", "Generative AI"],
    proprietary: true,
  },
  {
    title: "SimplyOptions",
    blurb: "A platform that streamlines trading of private company shares, giving users secure access to deal data and transactions.",
    categories: ["Software", "Capital Markets & Credit"],
    tech: ["Python", "Flask", "React", "Redux", "PostgreSQL", "OpenAI API"],
    live: "https://simplyoptions.onrender.com/",
    github: "https://github.com/Mandeepan/SimplyOptions",
  },
  {
    title: "Robinhood Clone",
    blurb: "An interactive trading simulation app with real-time market data visualization and customizable themes.",
    categories: ["Software", "Data & Modelling"],
    tech: ["Python", "Flask", "React", "Redux", "PostgreSQL"],
    live: "https://robinhoodclone.onrender.com/",
    github: "https://github.com/Mandeepan/RobinhoodClone",
  },
  {
    title: "GoVocay",
    blurb: "A user-friendly booking platform for accommodations, offering a seamless search and reservation experience.",
    categories: ["Software"],
    tech: ["JavaScript", "Express.JS", "Sequelize ORM", "SQLite", "Node.JS"],
    live: "https://api-project-auth.onrender.com/",
    github: "https://github.com/Mandeepan/API-project",
  },
  {
    title: "PEAD Equity Momentum Strategy",
    blurb: "A US equity strategy capturing post-earnings-announcement drift, profiting from the lag before prices fully reflect earnings news.",
    categories: ["Data & Modelling"],
    tech: ["Python", "Polygon API", "Time Series Analysis", "Portfolio Optimization"],
  },
  {
    title: "SME Credit Risk Evaluation",
    blurb: "An automation tool that scores the creditworthiness of small and medium enterprises and flags likelihood of default.",
    categories: ["Capital Markets & Credit", "Data & Modelling"],
    tech: ["Python", "Tableau", "Salesforce API", "VaR", "Expected Shortfalls"],
  },
  {
    title: "Bitcoin Leading Price Index",
    blurb: "A real-time leading indicator for bitcoin built from multi-exchange tick data over WebSocket, with optimized factor weights to anticipate price moves.",
    categories: ["Data & Modelling", "Automation"],
    tech: ["Python", "WebSocket API", "JSON", "Statistical Forecasting"],
  },
  {
    title: "Credit Default Prediction Model",
    blurb: "A machine-learning ensemble combining borrower data with macroeconomic indicators to predict credit-card default and sharpen risk assessment.",
    categories: ["Data & Modelling", "Capital Markets & Credit"],
    tech: ["Logistic Regression", "Random Forest", "Naïve Bayes", "K-Fold CV"],
    github: "https://github.com/Mandeepan/Data-Science",
  },
  {
    title: "Gold Futures & ETF Pair Trade",
    blurb: "A statistical-arbitrage strategy trading cointegration between gold futures and ETFs, validated with sentiment analysis on macro commentary.",
    categories: ["Data & Modelling"],
    tech: ["Python", "Statistical Arbitrage", "Sentiment Analysis"],
  },
];

const FILTERS = [
  "All",
  "Capital Markets & Credit",
  "Automation",
  "Data & Modelling",
  "Software",
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <div className="projects-panel">
      <div className="projects-header">
        <h3 className="projects-eyebrow">PROJECTS</h3>
        {/* <p className="projects-subheading">
          Capital markets and automation work, plus selected quant and software builds.
        </p> */}
      </div>

      <div className="projects-filters" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`proj-pill ${filter === f ? 'proj-pill--active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {shown.map((p) => (
          <article className="proj-card" key={p.title}>
            <div className="proj-card__head">
              <h4 className="proj-card__title">{p.title}</h4>
              {p.org && <span className="proj-card__org">{p.org}</span>}
            </div>
            <p className="proj-card__blurb">{p.blurb}</p>
            <div className="proj-card__footer">
              <ul className="proj-card__tech">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="proj-card__links">
                {p.live && (
                  <a className="proj-card__link" href={p.live} target="_blank" rel="noreferrer">Live</a>
                )}
                {p.github && (
                  <a className="proj-card__link" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {p.proprietary && (
                  <span className="proj-card__note">Internal project</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
