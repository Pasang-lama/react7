import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Errorpage from './pages/Errorpage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scss/style.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/*",
    element: <Errorpage/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
