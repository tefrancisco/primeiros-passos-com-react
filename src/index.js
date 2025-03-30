import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';

let par = <p>Hello, react!</p>;

const root = createRoot(document.getElementById('root')); 
root.render(
    <App />
);