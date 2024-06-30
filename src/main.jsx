import React from 'react'
import ReactDOM from 'react-dom/client'
import Memory from '../services/memory.jsx'
import ListRender from './listRender.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memory>
      <ListRender />
    </Memory>
  </React.StrictMode>,
)