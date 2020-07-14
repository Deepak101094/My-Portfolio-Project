import React from "react";
//? hoc
import Layout from "../HOC/Layout";
//? image
import BurgerImage from "../images/burger-image.jpg";
import EcommerceImage from "../images/ecommerce-2140603_1920.jpg";
import SpaceXImg from "../images/spaceX.jpg";
//? material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    background: "#233",
    height: "100%",
    marginTop: "4rem",
    alignItems: "center",
  },
  cardContainer: {
    //maxWidth: 420,
    //  margin: "3rem",
    //  margin: "3rem auto",
    marginTop: "3rem",
    marginLeft: "3rem",
    marginRight: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2px",
      marginRight: "2px",
    },
  },
  line: {
    margin: "0 auto",
    border: "3px solid white",
    width: "100px",
  },
  heading: {
    textAlign: "center",
    paddingTop: "2rem",
    color: "#ffffff",
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.rootContainer}>
      <h1 className={classes.heading}>Project</h1>
      <div className={classes.line} />
      <Grid container spacing={4}>
        {/* project1 Burger Builder*/}
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="burger project"
                height="180"
                image={BurgerImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {" "}
                  Burger-Builder{" "}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  This is a pure React application that i made while learning
                  React. In this application, user can login and order burger by
                  adding ingredients that he/she wants. And also he/she can
                  check orders made by him/her.I used redux for state
                  management.
                 <b> Technologies Used: React, Redux, Redux-Thunk, Javascript,
                  HTML, CSS.</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                gitHub
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project2 E-commerce */}
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="burger project"
                height="180"
                image={EcommerceImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {" "}
                  E-Commerce-App{" "}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  This application has Customer and Admin parts. Admins can
                  Create, Edit and Delete Products whereas Customers can View
                  products, Add Products to Cart, Customize Cart and then Place
                  Order after that he can also see all of his Orders History.
                  <b> Technologies Used: React, Redux, Redux-Persist, Redux-Thunk,
                  Javascript, HTML, CSS, Material UI.</b> 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://github.com/Deepak101094/E-Commerce-App");
                }}
              >
                gitHub
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://e-commerce-app-10734.web.app");
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project3 SpaceX launce */}
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="burger project"
                height="180"
                image={SpaceXImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {" "}
                  SpaceX Launches Dashboard{" "}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  I've used SpaceX launches API for this application. In this
                  application, users can see Launches List and on click of any
                  of the launches a modal will open with details of that launch.
                  Apart from this he have 3 options to filter the data, he can
                  see Upcoming or Past launches or can select a date range. All
                  these filters are managed from Url so that it can be easily
                  shared via the Url itself.<b>Technologies Used: React, Redux,
                  Redux-Persist, Redux-Thunk, Javascript, HTML, CSS, Material
                  UI.</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://github.com/Deepak101094/E-Commerce-App");
                }}
              >
                gitHub
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://e-commerce-app-10734.web.app");
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project4 Crypto Polic */}
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="burger project"
                height="180"
                image={EcommerceImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {" "}
                  E-Commerce-App{" "}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  This application has Customer and Admin parts. Admins can
                  Create, Edit and Delete Products whereas Customers can View
                  products, Add Products to Cart, Customize Cart and then Place
                  Order after that he can also see all of his Orders History.
                  Technologies Used: React, Redux, Redux-Persist, Redux-Thunk,
                  Javascript, HTML, CSS, Material UI.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://github.com/Deepak101094/E-Commerce-App");
                }}
              >
                gitHub
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open("https://e-commerce-app-10734.web.app");
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout(Project);
