import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import "./Home.css";


export default function Home(){
    return <div className="home">
      <div className="about">
        <h2> Hi, my Name is Z</h2> 
        <div className="prompt">
          <p> A software dev</p>
          <LinkedIn/>
          <GitHub />
          <EmailIcon/>
        </div>
        

      </div>
      <div className="skills">
         <h1> Skills</h1>
         <ol className="list">
           <li className="item">
            <h2> Frontend</h2>
            <span>
              ReactJs,Redux,HTML, CSS
            </span>
           </li>
           <li className="item">
            <h2> BackEnd</h2>
            <span>
              NodeJs, ExpressJS, MySQL, MondoDB
              </span>
           </li>
           <li className="item">
            <h2> Languages</h2>
            <span>
              JavaScript, Python, C++
              </span>
           </li>
         </ol>

        </div>

    </div>
  }