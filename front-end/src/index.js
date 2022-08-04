import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);