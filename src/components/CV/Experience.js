import React from 'react';
//? import from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>({
    card: {
        maxWidth: 900,
        height: 250,
        background: "#330011",
        opacity: "0.8",
        marginBottom: '1rem'
      },
      content: {
        color: "white",
        marginLeft: "1rem",
        fontFamily: "Palatino Linotype",
      },
      heading: {
        color: "white",
        marginLeft: "0.8rem",
      },    
}));

function Experience() {
    const classes = useStyles();
    return (
        <div container>
        <Card className={classes.card}>
        <Typography className={classes.heading} variant="h3">
          Experience{" "}
        </Typography>
        <Typography className={classes.content} variant="h6">
          <Divider />
          I have 6 month of self experience and I design some
          website like Resort Booking ,Burger Builder and My portfolio
          and these websites perfectly working on every size of screen
          using React,CSS,HTML,Bootstrap,etc..
        </Typography>
      </Card>
        </div>
    )
}

export default Experience;
