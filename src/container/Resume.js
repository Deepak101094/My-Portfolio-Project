import React from "react";
//? import icons from images 
import cssIcon from "../images/css.png";
import gitIcons from "../images/git.png";
import reactIcon from "../images/react.png";
import JavascriptIcon from "../images/javascript.png";
import reactnativeIcon from "../images/react_native.png";
import reduxIcon from "../images/redux.png";
import htmlIcon from "../images/html.jpeg";
import materialIcon from "../images/material-ui.png";
import bootstrapIcon from "../images/bootstrap-4.jpg";
//? hoc
import Layout from "../HOC/Layout";
//? @matrial-ui import
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//?own component
import SkillLevel from "../components/CV/SkillLevel";
import Skills from "../components/CV/Skills";
import PersonalInfo from "../components/CV/Personal-info";
import Education from "../components/CV/Education";
import Experience from "../components/CV/Experience";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "4rem",
  },
  paper: {
    background: "#1e2f2f",
    opacity: "1",
  },
  card1 : {
    background: "#006666",
    opacity: "2",
    marginBottom: '1rem'
  },
  card2: {
    background: "#330000",
    opacity: "0.8",
    marginBottom: '1.5rem'
  },
  heading: {
    color: "white",
    marginLeft: "0.8rem",
    [theme.breakpoints.down("xs")]: {  
      fontSize: '30px'
    }
  }, 
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <CssBaseline />
        <Grid item xs={12} container>        
          <Grid item sm={4} xs={12}>           
             <PersonalInfo />            
          </Grid>

          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper}>
             <Education />              
             <Experience />
             
             <Card className={classes.card1}> 
             <Typography className={classes.heading} variant="h3">
               Skills
             </Typography>  
             <Grid item xs={12} container >
                <Grid item xs={12} sm={4}>
                <Skills imageSource={reactIcon} />
                <Skills imageSource={reduxIcon} />
                <Skills imageSource={reactnativeIcon} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Skills imageSource={JavascriptIcon} />
                <Skills imageSource={htmlIcon} />
                <Skills imageSource={gitIcons} />
                </Grid>               
                <Grid item xs={12} sm={4}>
                <Skills imageSource={cssIcon} />
                <Skills imageSource={materialIcon} />
                <Skills imageSource={bootstrapIcon} />
                </Grid>
                </Grid>
                </Card>

                <Card className={classes.card2}> 
                <Typography className={classes.heading} variant="h3">
                   SkillLevel
                </Typography>
                <SkillLevel SkillLevel="Reactjs" progress="80" />
                <SkillLevel SkillLevel="Reduxjs" progress="70" />
                <SkillLevel SkillLevel="React-Native" progress="40" />
                <SkillLevel SkillLevel="JavaScript" progress="60" />
                <SkillLevel SkillLevel="GIT" progress="60" />
                <SkillLevel SkillLevel="HTML" progress="80" />
                <SkillLevel SkillLevel="CSS" progress="65" />
                <SkillLevel SkillLevel="Material-UI" progress="70" />
                <SkillLevel SkillLevel="Bootstrap" progress="40" />
                </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout(Resume);
