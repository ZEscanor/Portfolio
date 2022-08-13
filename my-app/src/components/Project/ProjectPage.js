import GitHub from "@mui/icons-material/GitHub";
import { useParams } from "react-router-dom"
import ProjectListItem from "./ProjectListItem";
import { projectObject } from "./ProjectObject";

export const ProjectPage = () => {
 const {id} = useParams();
 const project = projectObject[id];
 return <div className="project">
    <h1>{project.name}</h1>
    <img src = {project.image} />
    <GitHub/>
      
 </div>
}