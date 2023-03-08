import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Main from './components/Main/Main'
import Auth from './components/Auth/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";



function App() {

  return (
    <div >
      <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
        

          <Route path={"/"} exact element={<Home/>} />
          <Route path={"/main"} exact element={<Main />} />
          <Route path={"/auth"} exact element={<Auth />} />




        </Routes>


      </BrowserRouter>





    </div>
  );
}

export default App;
