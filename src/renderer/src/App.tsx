import Versions from './components/Versions'
import electronLogo from './assets/leetcode.svg'
import { useEffect } from 'react'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  console.log(`curr location: ${window.location.href}`)

  useEffect(() => {
    window.location.replace('https://leetcode.com')
  }, [])

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} onClick={ipcHandle} />
      <h1 className="text-3xl">LOADING LEETCODE...</h1>
      <Versions></Versions>
    </>
  )
}

export default App
