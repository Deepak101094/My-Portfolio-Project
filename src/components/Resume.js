import React from "react";
//? import icons from images component
import Image from "../images/education.jpg";
import avatar from "../avatar.png";
import cssIcon from "../images/css.png";
import gitIcons from "../images/git.png";
import reactIcon from "../images/react.png";
import JavascriptIcon from "../images/javascript.png";
import reactnativeIcon from "../images/react_native.png";
import reduxIcon from "../images/redux.png";
import htmlIcon from "../images/html.jpeg";
import materialIcon from "../images/material-ui.png";
//? hoc
import Layout from "../HOC/Layout";
//? @matrial-ui import
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//?material icons
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//?own component
import SkillLevel from "./SkillLevel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "4rem",
  },
  paper: {
    background: "grey",
  },
  leftCard: {
    background: " #1e2f2f",
    opacity: "1",
  },
  avatar: {
    display: "block",
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  divider: {
    background: "black",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    margin: "2rem",
  },
  leftHeading: {
    marginTop: "3rem",
  },
  detailPaper: {
   width: "auto",
   height: "auto",
   background: '#1e2f2f',
   color: "black",
   marginTop: '3rem'
  },

  paragraph: {
    color: "white",
    marginLeft: "1rem",
    fontFamily: "Palatino Linotype",
  },
  card1: {
    maxWidth: 900,
    height: 400,
    marginBottom: "1rem",
  },
  image: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  card2: {
    maxWidth: 900,
    height: 240,
    marginBottom: "1rem",
    background: "#330011",
    opacity: "0.8",
  },

  card4: {
    maxWidth: 900,
    height: "auto",
    marginBottom: "1rem",
    background: "#330000",
    opacity: "0.8",
  },

  fontHeading: {
    color: "white",
    marginLeft: "0.8rem",
  },
  card3: {
    width: 900,
    height: 400,
    background: " #1e2f2f",
    opacity: "1",
    marginBottom: " 1rem",
  },
  row: {
    height: 100,
    background: "white",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    hover: {
      background: "blue",
    },
  },
  reactIcon: {
    width: "200px",
    height: 90,
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <CssBaseline />
        <Grid item xs={12} container spacing={0}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.leftCard}>
              <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="deepak" />
              </Grid>
              <Divider className={classes.divider} variant="fullWidth" />
              <CardContent>
                <Typography className={classes.text} variant="h4">
                  {" "}
                  Deepak Pandey{" "}
                </Typography>
                <Typography className={classes.leftHeading} variant="h4">
                  {" "}
                  Web Developer{" "}
                </Typography>
                <Divider className={classes.divider} variant="middle" />
                <Typography className={classes.paragraph} variant="h6">
                  An experienced web developer with a strong interest in
                  projects that require both conceptual and analytical thinking.
                  Fully-committed to designing and developing innovative
                  web-based materials that users will love. Always eager to
                  learn new technologies being introduced in the market.
                </Typography>
                <Divider className={classes.divider} variant="middle" />
                <Paper className={classes.detailPaper}> 
                <h1>  Address </h1>
                <Typography  variant="h6">
                <ContactMailIcon fontSize="large" /><br/>
                 10B/608 Vrindavan Yojna2 Raibareli Road Lucknow(u.p) 
                 </Typography>
                 </Paper>
                 <Paper className={classes.detailPaper}>
                 <h1> Phone </h1>
                 <Typography variant="h6"> 
                 <PhoneIcon fontSize="large" /><br />
                 6392453922
                 </Typography>
                 </Paper>
                 <Paper className={classes.detailPaper}>
                 <h1> Email </h1>
                 <Typography variant="h6"> 
                 <EmailIcon fontSize="large" /><br />
                  deepakpandey101094@gmail.com
                 </Typography>
                 </Paper>
                 <Paper className={classes.detailPaper}>
                 <h1> Skype </h1>
                 <Typography variant="h6"> 
                  6392453922
                 </Typography>
                 </Paper>
                 <Paper className={classes.detailPaper}>
                 <h1> LinkedIn </h1>
                 <Typography variant="h6"> 
                  <LinkedInIcon fontSize="large" />
                  linkedin.com/in/deepak-pandey-13b3791a7
                 </Typography>
                 </Paper>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper}>
              <Card className={classes.card1}>
                <Typography className={classes.fontHeading} variant="h3">
                  {" "}
                  Education{" "}
                </Typography>
                <div className={classes.image}> </div>
              </Card>

              <Card className={classes.card2}>
                <Typography className={classes.fontHeading} variant="h3">
                  Experience{" "}
                </Typography>
                <Typography className={classes.paragraph} variant="h6">
                  <Divider />I have 6 month of self experience and I design some
                  website like Resort Booking ,Burger Builder and My portfolio
                  and these websites perfectly working on every size of screen
                  using React,CSS,HTML,Bootstrap,etc..
                </Typography>
              </Card>

              <Card container className={classes.card3}>
                <Typography className={classes.fontHeading} variant="h3">
                  {" "}
                  Skills{" "}
                </Typography>
                <Grid container>
                  <Grid item xs={12} container spacing={0}>
                    <Grid item xs={12}>
                      <div className={classes.row}>
                        <ul className={classes.ul}>
                          <li>
                            <img
                              src={reactIcon}
                              className={classes.reactIcon}
                              alt="react"
                            />{" "}
                          </li>
                          <li>
                            <img
                              src={reduxIcon}
                              className={classes.reactIcon}
                              alt="redux"
                            />{" "}
                          </li>
                          <li>
                            <img
                              src={gitIcons}
                              className={classes.reactIcon}
                              alt="git"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.row}>
                        <ul className={classes.ul}>
                          <li>
                            <img
                              src={htmlIcon}
                              className={classes.reactIcon}
                              alt="html"
                            />{" "}
                          </li>
                          <li>
                            <img
                              src={cssIcon}
                              className={classes.reactIcon}
                              alt="css"
                            />{" "}
                          </li>
                          <li>
                            <img
                              src={JavascriptIcon}
                              className={classes.reactIcon}
                              alt="javascript"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.row}>
                        <ul className={classes.ul}>
                          <li>
                            <img
                              src={materialIcon}
                              className={classes.reactIcon}
                              alt="material"
                            />{" "}
                          </li>
                          <li>
                            <img
                              src={reactnativeIcon}
                              className={classes.reactIcon}
                              alt="native"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>

              <Card className={classes.card4}>
                <Typography className={classes.fontHeading} variant="h3">
                  {" "}
                  Skill Level{" "}
                </Typography>
                <SkillLevel skill="Reactjs" progress="80" />
                <SkillLevel skill="Reduxjs" progress="70" />
                <SkillLevel skill="JavaScript" progress="60" />
                <SkillLevel skill="GIT" progress="60" />
                <SkillLevel skill="HTML" progress="80" />
                <SkillLevel skill="CSS" progress="65" />
                <SkillLevel skill="Material-UI" progress="70" />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout(Resume);
