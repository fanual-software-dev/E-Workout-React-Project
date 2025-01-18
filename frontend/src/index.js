import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContextProvider';
import { UsersContextProvider } from './context/UsersContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
        <UsersContextProvider>
          <App />
        </UsersContextProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>
);


