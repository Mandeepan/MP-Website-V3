import { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    const toggle = () => {
        const next = !isLight;
        setIsLight(next);
        document.documentElement.setAttribute('data-theme', next ? 'light' : 'dark');
    };

    return (
        <button
            className={`theme-btn ${isLight ? 'light' : ''}`}
            onClick={toggle}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        >
            <svg className="theme-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />

                {/* Sun — visible in dark mode (click to go light) */}
                <g className="sun-icon">
                    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="18" y1="8"  x2="18" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="30" x2="18" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="8"  y1="18" x2="6"  y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="30" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="11.5" y1="11.5" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="24.5" y1="24.5" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="24.5" y1="11.5" x2="26" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="11.5" y1="24.5" x2="10" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Moon + star — visible in light mode (click to go dark) */}
                <g className="moon-icon">
                    {/* crescent moon */}
                    <path
                        d="M16 11C12.13 11 9 14.13 9 18C9 21.87 12.13 25 16 25C17.45 25 18.79 24.55 19.9 23.78C17.73 23.3 16 21.34 16 19C16 16.66 17.73 14.7 19.9 14.22C18.79 12.45 17.45 11 16 11Z"
                        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"
                    />
                    {/* small star top-right */}
                    <polygon
                        points="25,10 25.6,12 27.7,12 26.1,13.2 26.7,15.2 25,14 23.3,15.2 23.9,13.2 22.3,12 24.4,12"
                        stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"
                    />
                </g>
            </svg>
        </button>
    );
};

export default ThemeToggle;
