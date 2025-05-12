import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppContextProvider } from './components/context/app.context.jsx'
import ProjectPage from './pages/project.jsx'
import AboutPage from './pages/about.jsx'
import HomePage from './pages/home.jsx'
import './i18lang.js';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/project",
          element: <ProjectPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
