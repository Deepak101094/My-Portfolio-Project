import React from 'react'
//? import from avatar.png
import avatar from "../../avatar.png";
//? @matrial-ui import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//?material icons
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
    card: {
        background: " #1e2f2f",
        opacity: "1",
      },
      avatar: {
        display: "block",
        margin: theme.spacing(1),
        width: theme.spacing(26),
        height: theme.spacing(26),
        marginTop: "1rem"
      },
      divider: {
        background: "black",
      },
      text: {
        color: "#ffffff",
        textAlign: "center",
        margin: "1.4rem",

      },
      heading: {
        marginTop: "2rem",
      },
      paper: {
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
}))


function PersonalInfo() {
    const classes = useStyles();
    return (
        <div container>
        <Card className={classes.card}>
        <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="deepak" />
      </Grid>
      <Divider className={classes.divider} variant="fullWidth" />
      <CardContent>
        <Typography className={classes.text} variant="h4">
          {" "}
          Deepak Pandey{" "}
        </Typography>
        <Typography className={classes.heading} variant="h4">
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
        <Paper className={classes.paper}> 
        <h1>  Address </h1>
        <Typography  variant="h6">
        <ContactMailIcon fontSize="large" /><br/>
         10B/608 Vrindavan Yojna2 Raibareli Road Lucknow(u.p) 
         </Typography>
         </Paper>
         <Paper className={classes.paper}>
         <h1> Phone </h1>
         <Typography variant="h6"> 
         <PhoneIcon fontSize="large" /><br />
         6392453922
         </Typography>
         </Paper>
         <Paper className={classes.paper}>
         <h1> Email </h1>
         <Typography variant="h6"> 
         <EmailIcon fontSize="large" /><br />
          deepakpandey101094@gmail.com
         </Typography>
         </Paper>
         <Paper className={classes.paper}>
         <h1> Skype </h1>
         <Typography variant="h6"> 
          6392453922
         </Typography>
         </Paper>
         <Paper className={classes.paper}>
         <h1> LinkedIn </h1>
         <Typography variant="h6"> 
          <LinkedInIcon fontSize="large" /><br/>
          linkedin.com/in/deepak-pandey-13b3791a7
         </Typography>
         </Paper>
      </CardContent> 
      </Card>
        </div>
    )
}

export default PersonalInfo;
