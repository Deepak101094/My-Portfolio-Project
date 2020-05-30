import React from "react";
//?material-ui
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";


const useStyles = makeStyles({
  root: {
    minWidth: 0,
    maxWidth: 250,
    padding: "12px",
  },
  icon: {
    fill: "tan",
    "&:hover": {
      fill: "tomato",
      fontSize: "1.8rem",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#233" }}>
      <a className={classes.root} href="https://twitter.com/login">
        <TwitterIcon className={classes.icon} />
      </a>
      <a className={classes.root} href="https://www.facebook.com/">
      <FacebookIcon className={classes.icon} />
    </a>
      <a className={classes.root} href="https://www.linkedin.com/in/deepak-pandey-13b3791a7/">
        <LinkedInIcon className={classes.icon} />
      </a>
      <a className={classes.root} href="https://github.com/Deepak101094">
        <GitHubIcon className={classes.icon} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
