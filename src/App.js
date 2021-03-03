import React from 'react'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  //JSX Tutorial (Javascript XML)
  //Writing JS in HTML 
  //Allows to write JS and HTML togrther
  let data = "contact us component"

  return (
    <div>
      <h1>{data}</h1> 
       <About />
       <Contact />
    </div>
  )
}

export default App;
