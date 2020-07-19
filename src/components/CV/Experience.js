import React from "react";
import "./Experience.css";
//? import from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
//import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   card: {
      maxWidth: 900,
      // height: 220,
      marginBottom: "1rem",
   },
}));

function Experience() {
   const classes = useStyles();
   return (
      <div container>
         <Card className={classes.card}>
            <CardActionArea>
               <h1 className="h1">Experience </h1>
               <Divider />
               <p className="paragraph">
                  I've 7 months of experience as a React developer. I've finished 5 projects using
                  React and Redux.
               </p>
            </CardActionArea>
         </Card>
      </div>
   );
}

export default Experience;
