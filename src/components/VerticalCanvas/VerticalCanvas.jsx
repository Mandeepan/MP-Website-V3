import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './VerticalCanvas.css';

const INITIAL_PANEL = 0;

const VerticalCanvas = ({ panels, labels }) => {
  const PANEL_COUNT = panels.length;
  const [currentPanel, setCurrentPanel] = useState(INITIAL_PANEL);
  const [hasInteracted, setHasInteracted] = useState(false);
  const controls = useAnimation();
  const scrollLock = useRef(false);
  const currentPanelRef = useRef(INITIAL_PANEL);
  const panelRefs = useRef([]);      // refs to each panel DOM node (for scroll position checks)
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const [panelHasMore, setPanelHasMore] = useState(false);

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
      // Reset destination panel scroll to top so you always land at the beginning
      const el = panelRefs.current[clamped];
      if (el) el.scrollTop = 0;
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

  // Mouse wheel / trackpad navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollLock.current) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 20) return;
      scrollLock.current = true;
      if (delta > 0) goToPanel(currentPanelRef.current + 1);
      else           goToPanel(currentPanelRef.current - 1);
      setTimeout(() => { scrollLock.current = false; }, 900);
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToPanel]);

  // Touch navigation — boundary-aware so inner scroll works normally
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    const deltaX = Math.abs(touchStartX.current - e.changedTouches[0].clientX);

    // Ignore swipes that are more horizontal than vertical
    if (deltaX > Math.abs(deltaY) * 0.8) return;
    // Ignore tiny taps
    if (Math.abs(deltaY) < 50) return;

    const panelEl = panelRefs.current[currentPanelRef.current];
    const atTop    = !panelEl || panelEl.scrollTop <= 2;
    const atBottom = !panelEl || panelEl.scrollTop + panelEl.clientHeight >= panelEl.scrollHeight - 2;

    if (deltaY > 0 && atBottom) {
      // Swiped up and panel is scrolled to bottom → go to next panel
      goToPanel(currentPanelRef.current + 1);
    } else if (deltaY < 0 && atTop) {
      // Swiped down and panel is at top → go to previous panel
      goToPanel(currentPanelRef.current - 1);
    }
  }, [goToPanel]);

  // Track whether the active panel still has content below to scroll
  const checkPanelScroll = useCallback(() => {
    const el = panelRefs.current[currentPanelRef.current];
    if (!el) { setPanelHasMore(false); return; }
    setPanelHasMore(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  }, []);

  useEffect(() => {
    const el = panelRefs.current[currentPanel];
    if (!el) return;
    checkPanelScroll();
    el.addEventListener('scroll', checkPanelScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkPanelScroll);
  }, [currentPanel, checkPanelScroll]);

  // Set initial position
  useEffect(() => {
    controls.set({ y: getY(INITIAL_PANEL) });
  }, [controls, getY]);

  return (
    <div
      className="vcanvas-outer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated floating orbs — fixed layer, always visible */}
      <div className="vcanvas-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      <motion.div
        className="vcanvas-track"
        animate={controls}
        style={{ y: getY(INITIAL_PANEL) }}
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            ref={el => { panelRefs.current[i] = el; }}
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
            className={`vcanvas-dot ${i === currentPanel ? 'vcanvas-dot--active' : ''} ${i === currentPanel && panelHasMore ? 'vcanvas-dot--has-more' : ''}`}
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
