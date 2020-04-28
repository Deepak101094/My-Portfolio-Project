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
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Skills from "./Skills";

const BorderLinearProgress = withStyles({
  root: {
    height: 15,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    background: "grey",
  },
  avatar: {
    display: "block",
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
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
    background: ' #c3c388',
    "&hover:": {
      width: 1000,
      height:400,
    }
  },
  card3: {
    maxWidth: 900,
    height: "auto",
    marginBottom: "1rem",
    background: '#c3c388'
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <CssBaseline />
        <Grid item xs={12} container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Card>
              <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="deepak" />
              </Grid>
              <CardContent>
                <Typography variant="h4">left Card Component</Typography>
                <Typography variant="h5">
                  my name is deepak pandey.my name is deepak pandey.my name is
                  deepak pandey.my name is deepak pandey.my name is deepak
                  pandey.my name is deepak pandey.my name is deepak pandey.my
                  name is deepak pandey.my name is deepak pandey
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Paper className={classes.paper} >
              <Card className={classes.card1}>
                <Typography variant="h3"> Education </Typography>
                <CardActionArea>
                  <CardMedia
                    className={classes.image}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={Education}
                    title="Education"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Education
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2">
                    Experience
                  </Typography>
                  <Divider  variant="fullWidth" light={true} />
                  <Typography variant="h5">
                    I have 6 month of self experience and I design some website
                    like Resort Booking ,Burger Builder and My portfolio and
                    these websites perfectly working on every size of screen
                    using React,CSS,HTML,Bootstrap,etc..
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card3}>
              <Typography variant="h3"> Skills </Typography>
             <Skills />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout(Resume);
