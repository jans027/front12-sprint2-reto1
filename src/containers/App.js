import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '../components/Pagina1';
import Pagina2 from '../components/Pagina2';
import Pagina3 from '../components/Pagina3';
import Pagina4 from '../components/Pagina4';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import HomePage from '../components/HomePage';





export default class App extends Component {


  render() {


    return (
      <BrowserRouter>
        <div>
          <NavBar/>
            <Routes>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/pagina4" element={<Pagina4/>}/>
                <Route path="/pagina3" element={<Pagina3/>}/>
                <Route path="/pagina2" element={<Pagina2/>}/>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </div>
      </BrowserRouter>

    )
  }
}
