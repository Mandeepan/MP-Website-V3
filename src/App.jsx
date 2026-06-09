import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VerticalCanvas from './components/VerticalCanvas/VerticalCanvas';
import Home from './components/Home';
import AboutMe from './components/Experience/AboutMe';
import WorkExperience from './components/Experience/WorkExperience';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import MusicToggle from './components/MusicToggle/MusicToggle';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';

const PANEL_LABELS = [
  'Home',
  'About Me',
  'Journey',
  'Projects',
  'Contact',
];

const ProjectsPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
    <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
      <Projects />
    </div>
  </div>
);

const ContactPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
    <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
      <ContactMe />
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
      <ProjectsPanel key="projects" />,
      <ContactPanel key="contact" />,
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
