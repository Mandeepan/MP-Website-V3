import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './HorizontalCanvas.css';

// Panels: 0 = Experience (left), 1 = Home (center), 2 = Projects (right)
const PANEL_COUNT = 3;
const INITIAL_PANEL = 1; // start on Home

const HorizontalCanvas = ({ panels }) => {
  const [currentPanel, setCurrentPanel] = useState(INITIAL_PANEL);
  const [hasInteracted, setHasInteracted] = useState(false);
  const controls = useAnimation();
  const constraintsRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);

  const getX = useCallback((panelIndex) => {
    return -panelIndex * window.innerWidth;
  }, []);

  const goToPanel = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(PANEL_COUNT - 1, index));
      setCurrentPanel(clamped);
      controls.start({
        x: getX(clamped),
        transition: { type: 'spring', stiffness: 300, damping: 35 },
      });
      if (!hasInteracted) setHasInteracted(true);
    },
    [controls, getX, hasInteracted]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goToPanel(currentPanel - 1);
      if (e.key === 'ArrowRight') goToPanel(currentPanel + 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentPanel, goToPanel]);

  // Initialise position on mount
  useEffect(() => {
    controls.set({ x: getX(INITIAL_PANEL) });
  }, [controls, getX]);

  const handleDragStart = (_, info) => {
    dragging.current = true;
    dragStartX.current = info.point.x;
  };

  const handleDragEnd = (_, info) => {
    dragging.current = false;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Decide direction by velocity first, then offset distance
    if (velocity < -300 || (velocity >= -300 && offset < -80)) {
      goToPanel(currentPanel + 1);
    } else if (velocity > 300 || (velocity <= 300 && offset > 80)) {
      goToPanel(currentPanel - 1);
    } else {
      // Snap back
      goToPanel(currentPanel);
    }
  };

  return (
    <div className="canvas-outer" ref={constraintsRef}>
      <motion.div
        className="canvas-track"
        drag="x"
        dragConstraints={{
          left: getX(PANEL_COUNT - 1),
          right: 0,
        }}
        dragElastic={0.08}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x: getX(INITIAL_PANEL) }}
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`canvas-panel ${i === currentPanel ? 'canvas-panel--active' : ''}`}
          >
            {panel}
          </div>
        ))}
      </motion.div>

      {/* Dot navigation */}
      <div className="canvas-dots">
        {panels.map((_, i) => (
          <button
            key={i}
            className={`canvas-dot ${i === currentPanel ? 'canvas-dot--active' : ''}`}
            onClick={() => goToPanel(i)}
            aria-label={`Go to panel ${i + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint — fades in after 2s, hidden once user has interacted */}
      {!hasInteracted && (
        <div className="swipe-hints">
          <span className="swipe-hint swipe-hint--left">
            <span className="hint-arrow">←</span> Experience
          </span>
          <span className="swipe-hint swipe-hint--right">
            Projects <span className="hint-arrow">→</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default HorizontalCanvas;
