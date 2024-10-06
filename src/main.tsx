// React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// File imports
import './index.css'

// Component imports
import Layout from "./components/Layout/Layout";
import About from './components/About/About';
import PassGen from './components/PassGen/PassGen';

// Other module imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// This must follow the format of
// Path: Url of Path
// Eg:
// "About": "about" {as the url for about component is /about}

const currentlyConfiguredPaths: {[keys: string]: string} = {
  "About": "about", 
  "PassGen": ""
}

const MainRouter = createBrowserRouter([
  {
    path: "/", 
    element: <Layout navLinks={currentlyConfiguredPaths}/>, 
    children: [
      {
        path: "about", 
        element: <About />
      }, 
      {
        path: "", 
        element: <PassGen />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
  </StrictMode>,
)
