import React from "react";
// import ReactDOM from "react-dom";
import {Route,Link,Routes} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/contact.js";
import './App.css';





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
    <div className="App">
      <div>
      <header className="App-header"> 
        <Link to="/">Home </Link>  {/* pathname,search,hash, state:{from} */}
        <Link to="about">About </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project/1"></Link>
        

        <Routes>
        <Route path='/' element={<Home/>}/>      {/* NOTE: IN V6 react-router component is deprecated, use element */}
        <Route path='about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        </Routes>

         
         {/*<Route path='/project/:id' component={Project} />*/}

      </header>
      </div>
     {/* <body>
      <h1>Hi, my name is Z and I'm a full stack web developer based in Chicago, IL. 
        I have a passion for designing and working with API's and making the impossible possible. 
        I'm open to working with a great team of developers who love creating state-of-the-art solutions that make a difference</h1>
        </body> */}

        <footer className="footerA">
        <Link to='/'>Home</Link>  {/* pathname,search,hash, state:{from} */}
        <Link to='/about'>About </Link>
        <Link to='/contact'>Contact</Link>
        <Link to="/project/1"></Link>
        <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>

         
         {/*<Route path='/project/:id' component={Project} />*/}

        </Routes>
        </footer>
    </div>
  );
}

export default App;
