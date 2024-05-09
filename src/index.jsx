import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";

// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
let componentToRender;

const useApp = true;
if (useApp) {
  componentToRender = <App />;
} else {
  componentToRender = <AppClass />;
}

root.render(
  <React.StrictMode>
    {componentToRender}
  </React.StrictMode>
);
