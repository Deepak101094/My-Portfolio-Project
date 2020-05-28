import React from 'react';
import { lighten, makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";



const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#nnnnnn", 0.2),
    borderRadius: 20
  },
  bar: {
    borderRadius: 40,
    backgroundColor: " #339933",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
 
    SkillLevel: {
    fontSize : "19px",
    marginLeft: "1rem",
    display: "flex",
    marginTop: "2px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    }
    }
  }),
);

const SkillLevel =({ progress, SkillLevel }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Grid item xs={12} container >   
    <Grid item xs={12} sm={4}> 
     <h2 className={classes.SkillLevel}> {SkillLevel} </h2>
    </Grid>      
     <Grid item xs={12} sm={8}> 
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value= {progress}
      />     
      </Grid>
      </Grid>
    </div>
  );
}
export default SkillLevel;