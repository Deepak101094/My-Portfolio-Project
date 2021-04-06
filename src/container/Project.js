import React from "react";
//? hoc
import Layout from "../HOC/Layout";
//? image
import BurgerImage from "../images/burger-image.jpg";
import EcommerceImage from "../images/ecommerce-2140603_1920.jpg";
import SpaceXImg from "../images/spaceX.jpg";
import ImageSearch from "../images/imge-project.jpg";
import SalesHandy from "../images/saleshandy-screenshot.jpeg";
import CarAdvice from "../images/caradvice.jpg";
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
  projects: {
    marginRight: "6rem",
    marginLeft: "6rem",
    display: "flex",
    paddingTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
      marginLeft: "0px",
      display: "flex",
    },
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.rootContainer}>
      <h1 className={classes.heading}>Project</h1>
      <div className={classes.line} />
      <div className={classes.projects}>
        <Grid container spacing={2}>
          {/* SalesHandy */}
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="sales handy"
                  height="180"
                  image={SalesHandy}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {" "}
                    SalesHandy{" "}
                  </Typography>
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    It is a sales engagement platform that enables sales teams
                    to scale their email outreach operations seamlessly. It
                    keeps track of emails that how many times an email is
                    opened, whether a link in the email has been clicked or not,
                    mail merge feature etc.
                    <b>
                      {" "}
                      Technologies Used: React, Redux,NodeJs, Javascript, HTML,
                      CSS.
                    </b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(" https://www.saleshandy.com/");
                  }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* CarAdvice */}
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="car advice"
                  height="180"
                  image={CarAdvice}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {" "}
                    CarAdvice{" "}
                  </Typography>
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    This is an Australian website that shows Car’s Reviews,
                    Ratings, Comparisons, News etc on their platform.In this
                    application, all the pages need to by dynamic, for
                    eg:-/reviews/car-name.
                    Headless Wordpress is used for APIs .
                    Users can manage the content of the website from Wordpress.
                    We’ve used NextJs for server-side rendering and dynamic pages.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      " https://www.caradvice.com.au/ "
                    );
                  }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
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
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    This is a pure React application that i made while learning
                    React. In this application, user can login and order burger
                    by adding ingredients that he/she wants. And also he/she can
                    check orders made by him/her.I used redux for state
                    management.
                    <b>
                      {" "}
                      Technologies Used: React, Redux, Redux-Thunk, Javascript,
                      HTML, CSS.
                    </b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/Deepak101094/Burger-Builder-App"
                    );
                  }}
                >
                  gitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://burger-builder-applicati-418e8.web.app"
                    );
                  }}
                >
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
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    This application has Customer and Admin parts. Admins can
                    Create, Edit and Delete Products whereas Customers can View
                    products, Add Products to Cart, Customize Cart and then
                    Place Order after that he can also see all of his Orders
                    History.
                    <b>
                      {" "}
                      Technologies Used: React, Redux, Redux-Persist,
                      Redux-Thunk, Javascript, HTML, CSS, Material UI.
                    </b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/Deepak101094/E-Commerce-App"
                    );
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
          {/* project3 SpaceX launche */}
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
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    I've used SpaceX launches API for this application. In this
                    application, users can see Launches List and on click of any
                    of the launches a modal will open with details of that
                    launch. Apart from this he have 3 options to filter the
                    data, he can see Upcoming or Past launches or can select a
                    date range. All these filters are managed from Url so that
                    it can be easily shared via the Url itself.
                    <b>
                      Technologies Used: React, Redux, Redux-Persist,
                      Redux-Thunk, Javascript, HTML, CSS, Material UI.
                    </b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/Deepak101094/SpaceX-Launches-Dashboard"
                    );
                  }}
                >
                  gitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://spacex-launches-dashboard.web.app");
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
                  height="250"
                  image={ImageSearch}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Image-search-app{" "}
                  </Typography>
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    In this React application, I've used unsplash api to load
                    images, users can also search images using any keyword. I've
                    also implemented pagination using react-pagination library.
                    <b>
                      {" "}
                      Technologies Used: React, Redux-Thunk, Javascript,
                      React-Pagination, HTML, CSS etc.
                    </b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://github.com/Deepak101094/image_search");
                  }}
                >
                  gitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://image-search-app-3b71d.web.app");
                  }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Layout(Project);
