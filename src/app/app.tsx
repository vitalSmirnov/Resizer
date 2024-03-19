import * as React from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/style.css'
import { useEffect, useState } from 'react'
import { Main, Auth } from '../pages'

const App = () => {
  const [route, setRoute] = useState<string>()

  const setEnv = () => {
    setRoute('main')
  }

  useEffect(() => {
    if (localStorage.getItem('miroId')) setRoute('main')
    else setRoute('auth')
  }, [])

  return <>{route === 'main' ? <Main /> : <Auth callback={setEnv} />}</>
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
