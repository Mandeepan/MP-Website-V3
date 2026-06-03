import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './VerticalCanvas.css';

const INITIAL_PANEL = 0; // start on Home

const VerticalCanvas = ({ panels, labels }) => {
  const PANEL_COUNT = panels.length;
  const [currentPanel, setCurrentPanel] = useState(INITIAL_PANEL);
  const [hasInteracted, setHasInteracted] = useState(false);
  const controls = useAnimation();
  const scrollLock = useRef(false); // debounce rapid scroll events
  const currentPanelRef = useRef(INITIAL_PANEL);

  const getY = useCallback(
    (panelIndex) => -panelIndex * window.innerHeight,
    []
  );

  const goToPanel = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(PANEL_COUNT - 1, index));
      currentPanelRef.current = clamped;
      setCurrentPanel(clamped);
      controls.start({
        y: getY(clamped),
        transition: { type: 'spring', stiffness: 280, damping: 38 },
      });
      if (!hasInteracted) setHasInteracted(true);
    },
    [controls, getY, hasInteracted, PANEL_COUNT]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown') goToPanel(currentPanelRef.current + 1);
      if (e.key === 'ArrowUp')   goToPanel(currentPanelRef.current - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goToPanel]);

  // Mouse wheel / trackpad scroll navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Only intercept if the panel itself isn't scrollable mid-content
      // Allow native scroll inside panels that have overflow content,
      // but navigate between panels when at the top/bottom of a panel.
      if (scrollLock.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 20) return; // ignore tiny trackpad nudges

      scrollLock.current = true;
      if (delta > 0) {
        goToPanel(currentPanelRef.current + 1);
      } else {
        goToPanel(currentPanelRef.current - 1);
      }
      // Unlock after transition settles (~700ms)
      setTimeout(() => { scrollLock.current = false; }, 700);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToPanel]);

  // Set initial position
  useEffect(() => {
    controls.set({ y: getY(INITIAL_PANEL) });
  }, [controls, getY]);

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;
    const cur = currentPanelRef.current;

    // Swipe up (finger moves up) → go forward (higher index)
    if (velocity < -300 || offset < -80) {
      goToPanel(cur + 1);
    } else if (velocity > 300 || offset > 80) {
      goToPanel(cur - 1);
    } else {
      goToPanel(cur); // snap back
    }
  };

  return (
    <div className="vcanvas-outer">
      {/* Animated floating orbs — fixed layer, always visible */}
      <div className="vcanvas-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      <motion.div
        className="vcanvas-track"
        drag="y"
        dragConstraints={{
          top: getY(PANEL_COUNT - 1),
          bottom: 0,
        }}
        dragElastic={0.06}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ y: getY(INITIAL_PANEL) }}
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`vcanvas-panel ${i === currentPanel ? 'vcanvas-panel--active' : ''}`}
          >
            {panel}
          </div>
        ))}
      </motion.div>

      {/* Vertical dot nav on right side */}
      <div className="vcanvas-dots">
        {panels.map((_, i) => (
          <button
            key={i}
            className={`vcanvas-dot ${i === currentPanel ? 'vcanvas-dot--active' : ''}`}
            onClick={() => goToPanel(i)}
            aria-label={labels ? labels[i] : `Panel ${i + 1}`}
            title={labels ? labels[i] : ''}
          />
        ))}
      </div>

      {/* Swipe hint — fades in after 2.5s, disappears after first interaction */}
      {!hasInteracted && (
        <div className="vcanvas-hint">
          <span className="vhint-arrow">↓</span>
          <span className="vhint-label">scroll to explore</span>
        </div>
      )}
    </div>
  );
};

export default VerticalCanvas;
