import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project.js";









function App() {
 
  return (
 <div className="App">
 <Router>
 <NavBar/>
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/projects" element={<Project/>}/>
    
    </Routes>
    <Footer/>
    </Router>
   </div>
  
     
  );
  
  }

         

  


export default App;
