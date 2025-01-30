import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx';
import CountryDetails from './components/countryDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/:country',
        element: <CountryDetails />
      }]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)