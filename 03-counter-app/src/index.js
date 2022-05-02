import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#app');
const root = ReactDOM.createRoot(divRoot);
root.render(<PrimeraApp saludo='Hola, Soy Goku' />);