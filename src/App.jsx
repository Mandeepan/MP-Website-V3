import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:"*",
    element: <NotFoundPage />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;