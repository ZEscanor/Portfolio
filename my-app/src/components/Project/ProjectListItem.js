import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectListItem({name, image, id}){
    const navigate = useNavigate();
    return (
        <div className ="projectItem" onClick={()=> {
            navigate("/project/" + id)
        }}> 
        <div style={{backgroundImage: `url(${image})`}} className="pImage"/>
        <h1>{name} </h1>
        </div>
    )
}
export default ProjectListItem; 