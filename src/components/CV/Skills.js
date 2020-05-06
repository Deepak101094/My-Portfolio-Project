import React from "react";
import "./Skill.css";
//? @matrial-ui import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";


 const useStyles = makeStyles((theme) => ({
     root: {
       height: 100,
       [theme.breakpoints.down("sm")]: {
         height: 120,
        // margin: '2rem'
       },
       [theme.breakpoints.down("xs")]: {
         height:100,
         
       },
       [theme.breakpoints.down("md")]: {
         height: 100,
         margin: '1rem'
       }
     }
 }))

const Skill = ({imageSource}) => {
    const classes= useStyles();
    return (
      <div container className={classes.root}>
          <div className="icons">        
              <img
                src={imageSource}
                className="skillIcon"
                alt="react"
              />{" "}                           
        </div>
      </div>
    )
}
export default Skill;