/* eslint-disable no-unused-vars */
import React,{useState}from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Career from './components/Career'
import Help from './components/Help'
import Service from './components/Service'
import Home from './components/Home'
import Company from './components/Company'
import './App.css'

function App() {

  const [name,setName] = useState('Tushar')

  return (
    <div>
      <Company />
      {/* <Home />
      <About />
      <Contact />
      <Career />
      <Help name={name}/>
      <Service  name={name}/>
      <button onClick = { ()=>{
        setName("Tushar Mittal")
      }}>
        Update Name
      </button> */}
    </div>
  )
}

export default App;
