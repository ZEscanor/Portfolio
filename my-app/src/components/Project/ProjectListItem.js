import React from "react";


function ProjectListItem({name, image}){
    return (
        <div className ="projectItem"> 
        <div style={{backgroundImage: `url(${image})`}} className="pImage"/>
        <h1>{name} </h1>
        </div>
    )
}
export default ProjectListItem;