import React from 'react';
import { lighten, makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";


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
    grid: {
      flexGrow: 1
    },
    skill: {
      color: "white",
      fontSize: "25px",
    //  fontWeight: "10px",
    marginLeft: "1rem",
    display: "flex",
    marginTop: "2px"
    }
  }),
);

const Skills =({ progress, skill }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Grid item xs={12} container className={classes.grid}> 
 
    <Grid item xs={12} sm={4}> 
     <p className={classes.skill}> {skill} </p>
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
export default Skills;