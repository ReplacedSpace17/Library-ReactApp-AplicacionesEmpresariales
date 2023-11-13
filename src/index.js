import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";


import LibraryHome from './View/LibraryHomeView';
import LibraryAdd from './View/LibroAddView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="HomeLibrary"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/HomeLibrary",
    element:  <LibraryHome/>,
  },
  {
    path: "/LibraryAdd",
    element:  <LibraryAdd/>,
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
