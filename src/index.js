import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadConfig } from './config.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
async function init() {
  try {
    const config = await loadConfig();
    // Pass the config to your App or set it in a global context/store
    root.render(<App config={config} />);
  } catch (error) {
    console.error('Error loading configuration:', error);
    // Optionally render an error component here
  }
}

init();

