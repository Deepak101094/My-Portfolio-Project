import React from "react";
//?material-ui
import { BottomNavigation } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const Footer = () => {
  return (
    <BottomNavigation style={{ background: "#233", height: "auto" }}>
      <div className="social-icons">
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/deepak-pandey-13b3791a7/");
          }}
        >
          <LinkedInIcon className="social-icon" />
        </IconButton>
      </div>
      <div className="social-icons">
        <IconButton
          onClick={() => {
            window.open("https://github.com/Deepak101094");
          }}
        >
          <GitHubIcon className="social-icon" />
        </IconButton>
      </div>
      <div className="social-icons">
        <IconButton
          onClick={() => {
            window.open("https://twitter.com/login");
          }}
        >
          <TwitterIcon className="social-icon" />
        </IconButton>
      </div>
    </BottomNavigation>
  );
};
export default Footer;
