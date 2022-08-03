import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css";

function Footer(){

    return(
        <div className="footer">
            <div className="socialMedia">
                <GitHubIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>

                <p> &copy; Ztech.com</p>
            </div>
        </div>
    )
}

export default Footer;