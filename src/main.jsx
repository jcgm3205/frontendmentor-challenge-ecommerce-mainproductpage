import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { LibProvider } from './context/libraryContext';
import './index.css'

const container = document.getElementById('root');
const newRoot = createRoot(container); 
newRoot.render(
    <LibProvider>
        <App />    
    </LibProvider>    
);
