import React from "react";
import ProjectListItem from "./ProjectListItem";
import image1 from "../assets/image1.jpeg";
import "./Project.css";


function Project(){
 
    return(
       <div className="projects">
        <h1> My Projects</h1>
        <div className="ProjectList">
            <ProjectListItem name="PlaceHolder Project" image={image1}/>
            <ProjectListItem name="PlaceHolder Project" image={image1}/>
             </div>

       </div>
    )


}
export default Project;