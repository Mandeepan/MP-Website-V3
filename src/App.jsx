import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VerticalCanvas from './components/VerticalCanvas/VerticalCanvas';
import Home from './components/Home';
import AboutMe from './components/Experience/AboutMe';
import WorkExperience from './components/Experience/WorkExperience';
import SWEProjects from './components/Projects';
import DataProjects from './components/Projects/Projects2';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import MusicToggle from './components/MusicToggle/MusicToggle';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';

const PANEL_LABELS = [
  'Home',
  'About Me',
  'Experience & Education',
  'Software Engineering',
  'Data Analytics & Quant',
];

const LastPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
    <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
      <DataProjects />
    </div>
    <Footer />
  </div>
);

const CanvasPage = () => (
  <VerticalCanvas
    labels={PANEL_LABELS}
    panels={[
      <Home key="home" />,
      <AboutMe key="about" />,
      <WorkExperience key="work" />,
      <SWEProjects key="swe" />,
      <LastPanel key="data" />,
    ]}
  />
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <CanvasPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const App = () => (
  <div>
    <MusicToggle src="/ambient.mp3" />
    <ThemeToggle />
    <RouterProvider router={router} />
  </div>
);

export default App;
