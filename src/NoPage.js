import React from 'react'
import Header from './Header'
import './App.css';

export default function NoPage() {
  return (
      
    <div>
        <Header/>
        <div className = "container nopage-container">
            <h1 className = "text-center nopage">404 ERROR!</h1>
            <h1 className = "text-center nopage">PAGE NOT FOUND</h1>
        </div>
    </div>
  )
}
