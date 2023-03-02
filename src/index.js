import React, { useEffect } from 'react'
import  data from './blocks.json'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const MainComponent=()=>{
  useEffect(()=>{
    localStorage.setItem('blocks',JSON.stringify(data.blocks));
    },[])
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
