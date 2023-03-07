import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import Header from './Pages/Header';
import Form from './Pages/Form';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <div className='content'>
    <Header />
    <Form />
  </div>
)
