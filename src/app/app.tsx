import * as React from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/style.css'
import { Main } from '../pages'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
