import { useState } from 'react'
import './App.css'
import Nav from './Pages/Nav'
import HeroSection from './Pages/HeroSection'



const App = () => {
  return(
    <div className='bg-slate-900'>
        <Nav/>
        {/* <HeroSection/> */}
    </div>
  )
}

export default App;