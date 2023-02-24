import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>


          <Route path={"/"} exact element={<Home />} />
          <Route path={"/auth"} exact element={<Auth />} />




        </Routes>


      </BrowserRouter>





    </div>
  );
}

export default App;
