import React from "react";
//? import icons from images
import Image from "../../images/education.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 900,
    height: 400,
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.9",
  },
  heading: {
    color: "#ffffff",
    marginLeft: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: "0.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  text2: {
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    marginTop: "0.3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      textAlign: "center",
      marginTop: "0.2rem",
      color: "#ffffff",
    },
  },
}));

function Education() {
  const classes = useStyles();

  return (
    <div container className="container">
      <Card className={classes.card}>
        <div className={classes.image}>
          <Typography className={classes.heading} variant="h4">
            {" "}
            Education{" "}
          </Typography>
          <Typography className={classes.text} variant="h6">
            {" "}
            Master of Computer Application{" "}
          </Typography>
          <Typography className={classes.text2} variant="p">
            {" "}
            Shri Ramswaroop Memorial College of Engineering and Management,Lucknow{" "}
          </Typography>
          <Typography className={classes.text} >
            {" "}
            Jun 2017 - May 2019{" "}
          </Typography>

          <Typography className={classes.text} variant="h6">
            {" "}
            Bachelor of Computer Application{" "}
          </Typography>
          <Typography className={classes.text2} variant="p">
            {" "}
            M.C.R.P University, Bhopal,Madhya Pradesh{" "}
          </Typography>
          <Typography className={classes.text} >
            {" "}
            Jun 2014 - May 2017{" "}
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default Education;
