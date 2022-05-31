import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link,Routes} from "react-router-dom";
import './App.css';


function Home(props){
  return <h1>Home</h1>
}
function About(props){
  return <h1>About</h1>
}

function Contact(props){
  return <h1>Contact</h1>
}

function hist(props){
  const {push} = props.history;
  return <button onClick={() => push("/")}>Back Home</button>
  }

 const Project = props => {
    const {id} = props.match.params;
    const project = "placeholder" //find(proj=>proj.id == id)
    return <div> The id is {id} </div>
  }

  // useEffect(() => {
  //side effect run for projects api
  // },[id])

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter> 
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
       </BrowserRouter>
      </header>
      <div>
      <h1>Hi, my name is Z and I'm a full stack web developer based in Chicago, IL. 
        I have a passion for designing and working with API's and making the impossible possible. 
        I'm open to working with a great team of developers who love creating state-of-the-art solutions that make a difference</h1>
        </div>

        <footer>
        <BrowserRouter> 
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
       </BrowserRouter>
        </footer>
    </div>
  );
}

export default App;
