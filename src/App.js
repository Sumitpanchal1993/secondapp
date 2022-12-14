// import logo from './logo.svg';
import './App.css';
// import Leftsidebar from './Components/Homepage/Leftsidebar';

import Navbar from './Components/Homepage/Navbar';
// import Rightsidebar from './Components/Homepage/Rightsidebar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkTodo from './Components/WorkTodo';
import Career from './Components/Career';
import Products from './Components/Products';
import Customers from './Components/Customers';
import Contactus from './Components/Contactus';
import WorkDone from './Components/WorkDone';
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Userregd from './Components/Userregd';
import Loginpage from './Components/Loginpage';



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar heading='Gear Duniya' />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/products' element={<Products/>} />
            <Route exact path='/career' element={<Career />} />
            <Route exact path='/customers' element={<Customers />} />
            <Route exact path='/contactus' element={<Contactus />} />
            <Route exact path='/aboutus' element={<Aboutus />} />
            <Route exact path='/workdone' element={<WorkDone/>} />
            <Route exact path='/todo' element={<WorkTodo />} />
            <Route exact path='/userregd' element={<Userregd />} />
            <Route exact path='/loginpage' element={<Loginpage />} />
          </Routes>
          {/* <Leftsidebar/> */}
        </Router>
      </>
    )
  }
}
