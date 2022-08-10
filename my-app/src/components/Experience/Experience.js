
import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience(){
    return (
    <div className="Experience" >
      <VerticalTimeline lineColor="red">
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2016-2020"
        iconStyle={{background:"red", color:"black"}}
        icon={<SchoolIcon/>}>
          <h2 className="vertical-timeline-element-title"> University Of Illinois at Chicago</h2>
          <p> Matematical Computer Science Bachelor Degree</p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2020-2021"
        iconStyle={{background:"red", color:"black"}}
        icon={<SchoolIcon/>}>
          <h2 className="vertical-timeline-element-title"> Lambda School</h2>
          <p> Full Stack Web Development Certification</p>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2021"
        iconStyle={{background:"red", color:"black"}}
        icon={<WorkIcon/>}>
          <h2 className="vertical-timeline-element-title"> Lambda School</h2>
          <p> Peer Tutor</p>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
  

    </div>)
  }
  