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
import materialIcon from "../images/material-ui.png"
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

//?own component
import Skills from "./Skills";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "4rem"
  },
  paper: {
    background: "grey",
  },
  leftCard :{
    background: " #1e2f2f",
    opacity: "1"
   },
  avatar: {
    display: "block",
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  divider: {
  background: "black"
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    margin: "3rem",
  },
  web: {
   color:'blue',
   marginTop: "0.8rem"
  },
  paragraph: {
    color:"white",
    fontSize: '20px',
    fontWeight: "5px",
    fontFamily: "Palatino Linotype"
  },
  card1: {
    maxWidth: 900,
    height: 400,
    marginBottom: "1rem"
  },
  image: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    textAlign: 'center',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  card2: {
    maxWidth: 900,
    height: 300,
    marginBottom: "1rem",
    background: '#330011',
    opacity: "0.8",
  },
  experience: {
   marginLeft: "0.8rem" 
  },
  card3: {
    maxWidth: 900,
    height: "auto",
    marginBottom: "1rem",
    background: '#330000',
    opacity: "0.8"
  },

fontColor: {
  color: "white",
  margin: '1rem',
},
skillIcons: {
  width: 900,
  height: 400,
 background: "#006666",
 marginBottom:' 1rem'
},
row: {
  height: 100,
  background: "white",
  marginLeft: '1rem',
  marginRight: '1rem',
},
ul:{ 
  display: "flex",
  justifyContent: 'space-between',
  "hover": {
   background: "blue"
  },
},
reactIcon: {
width: "200px",
height: 90
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
              <Divider className={classes.divider} variant="fullWidth"/>
              <CardContent>
                <Typography className={classes.text} variant="h4"> Deepak Pandey </Typography>
                <Typography className={classes.web} variant="h5"> Web Developer </Typography>
                <Divider style={{background: "black"}} variant="middle" />
                <p className={classes.paragraph}> 
                An experienced web developer with a strong interest in projects that require both conceptual and
                analytical thinking. Fully-committed to designing and developing innovative web-based materials that
                users will love. Always eager to learn new technologies being introduced in the market.
                </p>
                <Divider style={{background: "black"}} variant="middle" />
                <Typography variant="h4"> Address </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper} >
              <Card className={classes.card1}>
              <Typography  variant="h2"> Education </Typography>
                <div  className={classes.image}> </div>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography style={{color: 'white'}}  gutterBottom variant="h2" component="h2">
                    Experience
                  </Typography>
                  <Divider  variant="fullWidth" light={true} />
                  <Typography className={classes.fontColor} variant="h6">
                    I have 6 month of self experience and I design some website
                    like Resort Booking ,Burger Builder and My portfolio and
                    these websites perfectly working on every size of screen
                    using React,CSS,HTML,Bootstrap,etc..
                  </Typography>
                </CardContent>
              </Card>

             <Card container className={classes.skillIcons}>
             <h3> Profesional Skills </h3>
             <Grid container >
             <Grid item xs={12} container spacing={0}>
             <Grid item  xs={12}>
              <div className={classes.row}> 
              <ul className={classes.ul}> 
              <li> <img src={reactIcon} className={classes.reactIcon} /> </li>
              <li> <img src={reduxIcon} className={classes.reactIcon} /> </li>
              <li> <img src={gitIcons} className={classes.reactIcon} /> </li>
              </ul>
              </div>
              </Grid>
              <Grid item xs={12}>
              <div className={classes.row}>
              <ul className={classes.ul}> 
              <li> <img src={htmlIcon} className={classes.reactIcon} /> </li>
              <li> <img src={cssIcon} className={classes.reactIcon} /> </li>
              <li> <img src={JavascriptIcon} className={classes.reactIcon} /> </li>                          
              </ul>
              </div>
              </Grid>
              <Grid item xs={12}>
              <div className={classes.row}>
               <ul className={classes.ul}>
               <li> <img src={materialIcon} className={classes.reactIcon} /> </li>
               <li> <img src={reactnativeIcon} className={classes.reactIcon} /> </li> 
              </ul>
               </div>
               </Grid>
              </Grid>
              </Grid>             
             </Card>

              <Card className={classes.card3}>
              <Typography className={classes.fontColor} variant="h2"> Skill Level </Typography>
             <Skills skill= "Reactjs" progress= "80" />
             <Skills skill= "Reduxjs" progress= "70" />
             <Skills skill= "JavaScript" progress="60" />
             <Skills skill= "GIT" progress= "60" />
             <Skills skill= "HTML" progress="80" />
             <Skills skill= "CSS" progress="65" />
             <Skills skill= "Material-UI" progress="70" />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout(Resume);
