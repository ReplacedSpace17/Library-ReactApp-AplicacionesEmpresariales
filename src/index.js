import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";

import Login from "./View/Login/Login";
import Home from './View/Home/Home';
import PacientesMenu from './View/Pacientes/PacientesMenu';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="Login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Login",
    element:  <Login/>,
  },
  {
    path: "/Home",
    element:  <Home/>,
  },
  {
    path: "/Pacientes",
    element:  <PacientesMenu/>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
