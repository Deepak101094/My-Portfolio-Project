import React from "react";
//? import icons from images 
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
import bootstrapIcon from "../images/bootstrap-4.jpg";
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
import SkillLevel from "../components/skills/SkillLevel";
import Skills from "../components/skills/Skills";

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
    margin: "1rem",
  },
  leftHeading: {
    marginTop: "1rem",
  },
  detailPaper: {
   width: "auto",
   height: "auto",
   background: '#1e2f2f',
   color: "black",
   marginTop: '2rem'
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
    width: '100%',
    height: '100%',  
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center' ,
    
  },
  card2: {
    maxWidth: 900,
    height: 250,
    marginBottom: "1rem",
    background: "#330011",
    opacity: "0.8",
  },
  card3: {
   
    height: 400,
    background: " #1e2f2f",
    opacity: "1",
    marginBottom: " 1rem",
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
                  <LinkedInIcon fontSize="large" /><br/>
                  linkedin.com/in/deepak-pandey-13b3791a7
                 </Typography>
                 </Paper>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper}>
              <Card className={classes.card1}>
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
                Skills{" "}
               </Typography>                        
             <Grid item xs={12} container direction="row" className={classes.Grid} spacing={0}>
                <Grid item xs={12} sm={4}>
                <Skills imageSource={reactIcon} />
                <Skills imageSource={reduxIcon} />
                <Skills imageSource={reactnativeIcon}/>
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

              <Card className={classes.card4}>
                <Typography className={classes.fontHeading} variant="h3">
                  {" "}
                  Skill Level{" "}
                </Typography>
                <SkillLevel SkillLevel="Reactjs" progress="80" />
                <SkillLevel SkillLevel="Reduxjs" progress="70" />
                <SkillLevel SkillLevel="JavaScript" progress="60" />
                <SkillLevel SkillLevel="GIT" progress="60" />
                <SkillLevel SkillLevel="HTML" progress="80" />
                <SkillLevel SkillLevel="CSS" progress="65" />
                <SkillLevel SkillLevel="Material-UI" progress="70" />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout(Resume);
