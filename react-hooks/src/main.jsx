import React, { createContext } from 'react';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

export const TreesContext = createContext();

const trees = [
  { id: 1, type: "Mapple" },
  { id: 2, type: "Apple" },
  { id: 3, type: "Banyan" }
];


createRoot(document.getElementById('root')).render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
)
