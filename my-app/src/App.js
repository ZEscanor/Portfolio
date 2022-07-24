import React from "react";
import {BrowserRouter as Route, Routes, Router} from "react-router-dom";
import NavBar from "./components/Nav/Nav.js";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";





// function hist(props){
//   const {push} = props.history;
//   return <button onClick={() => push("/")}>Back Home</button>
//   }

//  const Project = props => {
//     const {id} = props.match.params;
//     const project = "placeholder" //find(proj=>proj.id == id)
//     return <div> The id is {id} </div>
//   }

  // useEffect(() => {
  //side effect run for projects api
  // },[id])

function App() {
 
  return (
 <>

 <NavBar/>

     
   </>
  
     
  )
  
  }

         

  


export default App;
