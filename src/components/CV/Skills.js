import React from "react";
//? @matrial-ui import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";



const useStyles = makeStyles((theme) => ({
      row: {
        height: 100,
        background: "#ffffff",
        paddingLeft: '1rem',
        paddingRight: '1rem'
       },
      ul: {
        display: "flex",
        marginTop: '1px'
      },
      reactIcon: {
        width: "200px",
        height: 90,
        marginTop: '5px',
        [theme.breakpoints.down("xs")]: {
          width: "150px",
          height: 70,
          marginLeft: '2rem'
        }
      },
}))

const Skill = ({imageSource, heading}) => {
    const classes= useStyles();
    return (
      <div container>
          <div className={classes.row}>
          <ul className={classes.ul}> 
              <img
                src={imageSource}
                className={classes.reactIcon}
                alt="react"
              />{" "}                
              </ul>
        </div>
      </div>
    )
}
export default Skill;