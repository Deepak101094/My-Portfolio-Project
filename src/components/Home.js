import React from "react";
//? react-Typed
import Typed from "react-typed";
// import from @material-ui
import { Typography, Box, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//? own image
import avatar from "../avatar.png";

//CSS style
const useStyles = makeStyles((theme) => ({
  typedContainer: {
    position: "abosulte",
    top: "50%",
    left: "50%",
    marginTop: "6rem",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: theme.spacing(1),
  },
  title: {
    color: "#E89786",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
    marginTop: "1rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="deepak" />
      </Grid>

      <Typography variant="h3" className={classes.title}>
        <Typed strings={["MY NAME IS DEEPAK."]} typeSpeed={120} />
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        <Typed
          strings={[
            "I'M A FRONT-END DEVELOPER.",
            "I DESIGN RESPONSIVE WEBSITE.",
          ]}
          typeSpeed={140}
          backSpeed={80}
          loop
        />
      </Typography>
    </Box>
  );
};
export default Home;
