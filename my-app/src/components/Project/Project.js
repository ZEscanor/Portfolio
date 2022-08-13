import React from "react";
import ProjectListItem from "./ProjectListItem";
import image1 from "../assets/image1.png";
import { projectObject } from "./ProjectObject";
import "./Project.css";


function Project(){
 
    return(
       <div className="projects">
        <h1> My Projects</h1>
        <div className="projectList">
        {projectObject.map((project, idx)=>{
                return <ProjectListItem id={idx} name={project.name} image = {project.image} />
            })}
             </div>

       </div>
    )


}
export default Project;