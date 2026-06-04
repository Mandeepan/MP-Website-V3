import { useState, useRef, useEffect } from 'react';
import './MusicToggle.css';

const MusicToggle = ({ src = '/ambient.mp3' }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);
    const animateRef = useRef(null);

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

    // Start/stop the SVG animate element when playing state changes
    useEffect(() => {
        const anim = animateRef.current;
        if (!anim) return;
        if (playing) {
            anim.beginElement();
        } else {
            anim.endElement();
        }
    }, [playing]);

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
                    <path
                        className="wave-path"
                        d="M 7 18 C 10 18 13 18 18 18 C 23 18 26 18 29 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                    >
                        <animate
                            ref={animateRef}
                            attributeName="d"
                            begin="indefinite"
                            dur="1.4s"
                            repeatCount="indefinite"
                            fill="remove"
                            calcMode="spline"
                            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
                            values="
                                M 7 18 C 10 12 13 24 18 18 C 23 12 26 24 29 18;
                                M 7 18 C 10 22 13 14 18 18 C 23 22 26 14 29 18;
                                M 7 18 C 10 11 13 25 18 18 C 23 11 26 25 29 18;
                                M 7 18 C 10 24 13 12 18 18 C 23 24 26 12 29 18;
                                M 7 18 C 10 12 13 24 18 18 C 23 12 26 24 29 18
                            "
                        />
                    </path>
                </svg>
            </button>
        </>
    );
};

export default MusicToggle;
