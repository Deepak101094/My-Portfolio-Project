import React from "react";
//? @matrial-ui import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";



const useStyles = makeStyles((theme) => ({
      row: {
        height: 100,
        background: "white",
        marginLeft: "1rem",
        marginRight: "1rem",
      },
      ul: {
        display: "flex",
        justifyContent: "space-between",
        hover: {
          background: "blue",
        },
      },
      reactIcon: {
        width: "200px",
        height: 90,
      },
}))

const Skill = ({imageSource, heading}) => {
    const classes= useStyles();
    return (
      <div container>
         <Card> 
          <div className={classes.row}>
          <ul className={classes.ul}>
            <li>
              <img
                src={imageSource}
                className={classes.reactIcon}
                alt="react"
              />{" "}                
            </li>          
          </ul>
        </div>
        </Card>
      </div>
    )
}
export default Skill;