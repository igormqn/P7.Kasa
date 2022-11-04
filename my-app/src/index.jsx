import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/utils/css/style.css';
import Router from "./components/Route";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router />
  </React.StrictMode>
);


