import { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <h1>Welcome to Hackathon Sidebar!</h1>
        <p>Click on menu items to navigate. This sidebar is reusable for multiple projects!</p>
      </main>
    </div>
  )
}

export default App