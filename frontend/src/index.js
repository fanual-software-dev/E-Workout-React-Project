import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { workoutcontextprovider } from './context/workoutcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <workoutcontextprovider>
        <App />
    </workoutcontextprovider>
  </React.StrictMode>
);


