/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import { F } from 'react-bootstrap'
import About from './components/About'
import Contact from './components/Contact'
import Career from './components/Career'
import Help from './components/Help'
import Service from './components/Service'
import Home from './components/Home'
import Company from './components/Company'
import User from './components/User'
import CreateUser from './components/CreateUser'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './App.css'

function App() {

  const [name, setName] = useState('Tushar')

  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Blog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact Us</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/list">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <User />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        {/* <CreateUser />
        <Company />
        <Home />
        <About />
        <Contact />
        <Career />
        <Help name={name} />
        <Service name={name} />
        <button onClick={() => {
          setName("Tushar Mittal")
        }}>
          Update Name
        </button> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
