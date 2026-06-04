import { useState, useRef, useEffect } from 'react';
import './MusicToggle.css';

const MusicToggle = ({ src = '/ambient.mp3' }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = 0.35;
        const promise = audio.play();
        if (promise !== undefined) {
            promise
                .then(() => setPlaying(true))
                .catch(() => setPlaying(false));
        }
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    };

    return (
        <>
            <audio ref={audioRef} src={src} loop />
            <button
                className={`music-btn ${playing ? 'playing' : ''}`}
                onClick={toggle}
                aria-label={playing ? 'Pause music' : 'Play music'}
                title={playing ? 'Pause music' : 'Play music'}
            >
                <svg className="music-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />
                    {/* Wave line — animates between flat and wavy via CSS `d` */}
                    <path
                        className="wave-path"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </button>
        </>
    );
};

export default MusicToggle;
