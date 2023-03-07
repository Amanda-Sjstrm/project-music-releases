import { createRoot } from 'react-dom';
import './index.css';
import React from 'react';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />); // This is basically saying
// "take everything from App-file and show it in "root"-div in .html

// We dont need to change anything here