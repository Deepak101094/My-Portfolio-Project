import React from 'react';
import { lighten, makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';


const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#ffffff", 0.2),
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
    margin: {
      margin: theme.spacing(1),
    },
    SkillLevel: {
    color: "white",
    fontSize: "25px",
    marginLeft: "1rem",
    display: "flex",
    marginTop: "2px"
    }
  }),
);

const SkillLevel =({ progress, SkillLevel }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Grid item xs={12} container >  
    <Grid item xs={12} sm={4}> 
     <Typography variant="h6" className={classes.SkillLevel}> {SkillLevel} </Typography>
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