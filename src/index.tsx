import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

const container = document.getElementById('app-root')
if (container !== null) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error('Could not find container element with id "app-root".')
}
