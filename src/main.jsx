import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {inject} from "@vercel/analytics"
inject()

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


