import React from 'react'
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
import { Home } from './components/Home'
import Artist from './components/Artist'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-sm min-h-screen px-3 mx-auto flex items-center flex-col py-[60px]'>
        <Home />
        {/* <Artist /> */}
      </div>
      <Footer className='sm:absolute bottom-0' />
    </div>
  )
}

export default App