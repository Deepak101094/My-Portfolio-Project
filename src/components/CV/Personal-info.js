import React from "react";
//? import from avatar.png
import avatar from "../../avatar.png";
import Mypic from "../../images/mypic.jpeg";
//? @matrial-ui import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//?material icons
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Personal-Info.css";

const useStyles = makeStyles((theme) => ({
   avatar: {
      display: "block",
      margin: theme.spacing(1),
      width: theme.spacing(26),
      height: theme.spacing(26),
      marginTop: "3rem",
      [theme.breakpoints.down("xs")]: {
         width: theme.spacing(15),
         height: theme.spacing(15),
         marginTop: "2rem",
         display: "block",
      },
   },
   paper: {
      width: "auto",
      height: "auto",
      color: "black",
      marginTop: "1rem",
   },
}));

function PersonalInfo() {
   const classes = useStyles();
   return (
      <div container>
         <Card>
            <CardActionArea>
               <Grid container justify="center">
                  <Avatar className={classes.avatar} src={Mypic} alt="deepak" />
               </Grid>
               <Divider className={classes.divider} variant="fullWidth" />

               <h2 className="text">Deepak Pandey</h2>

               <h3 className="heading"> React Developer </h3>

               <Divider className={classes.divider} variant="middle" />
               <p className="paragraph">
                  I'm a self-taught Front-end developer and have been working from past 7 months. I
                  work on Javascript, React, Redux, HTML, CSS, MaterialUI etc. I finished my
                  graduation(BCA) in 2017 but unfortunately I had to start my journey as a Sales
                  Executive at HDFC bank due to financial problems but after some time I realised
                  that I'm at wrong place and I decided to quit that job and switch to web
                  development. Some of my friends who were already in this field had helped and
                  guided me in this transition. I started learning these technologies from Udemy
                  where I found some great instructors who helped me in clearing the concepts and
                  then I created some projects to sharp my skills and make myself industry ready.
               </p>
               <Divider className={classes.divider} variant="middle" />
               <div className="paper ml-3">
                  <Paper className={classes.paper}>
                     <h3 className="detail"> Address </h3>
                     <Typography variant="h6">
                        <ContactMailIcon fontSize="large" />
                        <br />
                        10B/608 Vrindavan Yojna2 Raibareli Road Lucknow(u.p)
                     </Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                     <h3 className="detail"> Phone </h3>
                     <Typography variant="h6">
                        <PhoneIcon fontSize="large" />
                        <br />
                        6392453922
                     </Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                     <h3 className="detail"> Email </h3>
                     <Typography variant="h6">
                        <EmailIcon fontSize="large" />
                        <br />
                        deepakpandey101094@gmail.com
                     </Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                     <h3 className="detail"> Skype </h3>
                     <Typography variant="h6">6392453922</Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                     <h3 className="detail"> LinkedIn </h3>
                     <Typography variant="h6">
                        <LinkedInIcon fontSize="large" />
                        <br />
                        linkedin.com/in/deepak-pandey-13b3791a7
                     </Typography>
                  </Paper>
               </div>
            </CardActionArea>
         </Card>
      </div>
   );
}

export default PersonalInfo;
