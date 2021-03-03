import React,{useState}from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Career from './components/Career'
import Help from './components/Help'
import Service from './components/Service'

function App() {

  const [name,setName] = useState('Tushar')

  return (
    <div>
      <About />
      <Contact />
      <Career />
      <Help name={name}/>
      <Service  name={name}/>
      <button onClick = { ()=>{
        setName("Tushar Mittal")
      }}>
        Update Name
      </button>
    </div>
  )
}

export default App;
