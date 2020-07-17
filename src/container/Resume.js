import React from "react";
import "./resume.css";
//? import icons from images 
import cssIcon from "../images/css.png";
import gitIcons from "../images/git.png";
import reactIcon from "../images/react.png";
import JavascriptIcon from "../images/javascript.png";
import reduxIcon from "../images/redux.png";
import htmlIcon from "../images/html.jpeg";
import materialIcon from "../images/material-ui.png";
import bootstrapIcon from "../images/bootstrap-4.jpg";
import Hooks from "../images/hooks.png";
//? hoc
import Layout from "../HOC/Layout";
//? @matrial-ui import
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
//?own component
import SkillLevel from "../components/CV/SkillLevel";
import PersonalInfo from "../components/CV/Personal-info";
import Education from "../components/CV/Education";
import Experience from "../components/CV/Experience";
import Skill from "../components/CV/Skills";

const useStyles = makeStyles((theme) => ({
root: {
  marginTop: "4rem",
  backgroundColor: '#ffffff'
},
card: {
marginTop: '1rem'
},
skill: {
  fontSize: "40px",
  marginLeft: "1rem",
  fontWeight: "20px",
  [theme.breakpoints.down("xs")]: {
    fontSize: "25px",
    marginLeft: "0.5rem",
    fontWeight:"15px"
  }
}
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div container className={classes.root}> 
        <CssBaseline />
        <div>
        <Grid container>
        <Grid item xs={12} sm={4} md={4}>        
        <PersonalInfo />     
        </Grid>
          
        <Grid item xs={12} sm={8} md={8}> 
        <Education />
        <Experience />

        <Card>
        <CardActionArea> 
        <h1 className={classes.skill}>Skills </h1>
        <Grid container>
        <Grid item xs={12} sm={4}>
        <Skill imageSource={reactIcon} />
        <Skill imageSource={reduxIcon} />
        <Skill imageSource={Hooks}/>
         </Grid> 
         <Grid item xs={12} sm={4}>
         <Skill imageSource={JavascriptIcon} />
         <Skill imageSource={gitIcons} />
         <Skill imageSource={htmlIcon}/> 
         </Grid>
         <Grid item xs={12} sm={4}>
         <Skill imageSource={cssIcon} />
         <Skill imageSource={materialIcon} />
         <Skill imageSource={bootstrapIcon} /> 
         </Grid>
        </Grid>
        </CardActionArea>
         </Card>
         
         <Card className={classes.card}> 
         <CardActionArea> 
         <h1 className={classes.skill}>SkillLevel</h1>
        <SkillLevel progress={80} SkillLevel="React"/>
        <SkillLevel progress={80} SkillLevel="Redux"/>
        <SkillLevel progress={75} SkillLevel="hooks"/>
        <SkillLevel progress={70} SkillLevel="JavaSript"/>
        <SkillLevel progress={60} SkillLevel="Git"/>
        <SkillLevel progress={80} SkillLevel="HTML"/>
        <SkillLevel progress={70} SkillLevel="CSS"/>
        <SkillLevel progress={80} SkillLevel="Material-UI"/>
        <SkillLevel progress={70} SkillLevel="Bootstrap"/>
         </CardActionArea>
         </Card>
        </Grid> 
        
        </Grid>
         </div>
       
    </div>
  );
};

export default Layout(Resume);
