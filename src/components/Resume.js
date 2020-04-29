import React from "react";
import Education from "../images/education.image.jpg";
import avatar from "../avatar.png";
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
  card1: {
    maxWidth: 900,
    height: 400,
    marginBottom: "1rem"
  },
  card2: {
    maxWidth: 900,
    height: 300,
    marginBottom: "1rem",
    background: '#330011',
    opacity: "0.8",
    "&hover:": {
      // width: 1000,
      // height:400,
    }
  },
  card3: {
    maxWidth: 900,
    height: "auto",
    marginBottom: "1rem",
    background: '#330000',
    opacity: "0.8"
  },
  image: {
    width: "100%",
    height: "auto",
  },
fontColor: {
  color: "white",
  margin: '1rem',
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
                <Typography style={{color:'blue', marginBottom: '0.8rem' }} variant="h5"> Web Developer </Typography>
                <Divider style={{background: "black"}} variant="middle" />
                <Typography variant="h5">
                An experienced web developer with a strong interest in projects that require both conceptual and
                analytical thinking. Fully-committed to designing and developing innovative web-based materials that
                users will love. Always eager to learn new technologies being introduced in the market.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper} >
              <Card className={classes.card1}>
                <Typography style={{ marginLeft: "1rem" }} variant="h2"> Education </Typography>
                <CardActionArea>
                  <CardMedia
                    className={classes.image}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={Education}
                    title="Education"
                  />
                 
                </CardActionArea>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography style={{color: 'white'}}  gutterBottom variant="h2" component="h2">
                    Experience
                  </Typography>
                  <Divider  variant="fullWidth" light={true} />
                  <Typography className={classes.fontColor} variant="h5">
                    I have 6 month of self experience and I design some website
                    like Resort Booking ,Burger Builder and My portfolio and
                    these websites perfectly working on every size of screen
                    using React,CSS,HTML,Bootstrap,etc..
                  </Typography>
                </CardContent>
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
