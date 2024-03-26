import * as React from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/style.css'
import { Main } from '../pages'

const App = () => {
  return <Main />
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
