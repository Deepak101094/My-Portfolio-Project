import React from 'react';
import "./Experience.css";
//? import from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from '@material-ui/core';

 const useStyles = makeStyles((theme) =>({
     card: {
         maxWidth: 900,
        // height: 220,
         marginBottom: '1rem'
       },
 }));

function Experience() {
    const classes = useStyles();
    return (
        <div container>
        <Card className={classes.card}>
        <CardActionArea> 
        <h1 className="h1">
          Experience{" "}
        </h1>
        <p className="paragraph">
          <Divider />
          I have 6 month of self experience and I design some
          website like Resort Booking ,Burger Builder and My portfolio
          and these websites perfectly working on every size of screen
          using React,CSS,HTML,Bootstrap,etc..
        </p>
        </CardActionArea>
      </Card>
        </div>
    )
}

export default Experience;
