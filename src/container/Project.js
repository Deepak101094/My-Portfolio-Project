import React from "react";
//? hoc
import Layout from "../HOC/Layout";
//? image
import BurgerImage from "../images/burger-image.jpg";
import EcommerceImage from "../images/ecommerce-2140603_1920.jpg"
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


const useStyles= makeStyles({
    rootContainer: {
        background: "#233",
        height: "100%",
        marginTop: "4rem",
        alignItems: 'center'
    },
    cardContainer: {
        maxWidth: 380,
        margin: "3rem",
        margin: "5rem auto"
    },
    line: {
        margin: "0 auto",
        border: '3px solid white',
        width: '100px'
    },
    heading: {
        textAlign: 'center',
        paddingTop: '2rem',
        color: "#ffffff"
    }
})


const Project = () => {
    const classes = useStyles();
  return (
    <Box component="div" className={classes.rootContainer}>
        <h1 className={classes.heading}>Project</h1>
        <div className={classes.line} />   
      <Grid container justify="center">
       {/* project1*/}
        <Grid item xs={12} sm={8} md={6}>          
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
                  Burger{" "}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  This is Burger Builder website which can be use to place
                  burger order as customer specification,Build on
                  React,CSS,JSX,React-router,firebase,etc..
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">gitHub</Button>
            <Button size="small" color="primary">Live Demo</Button>
            </CardActions>
          </Card>
          
        </Grid>
        {/* project2 */}
        <Grid item xs={12} sm={8} md={6}>
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
                E-Commerce{" "}
              </Typography>
              <Typography variant="body" color="textSecondary" component="p">
                This is Burger Builder website which can be use to place
                burger order as customer specification,Build on
                React,CSS,JSX,React-router,firebase,etc..
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">gitHub</Button>
          <Button size="small" color="primary">Live Demo</Button>
          </CardActions>
        </Card>    
      </Grid>
      </Grid>
    </Box>
  );
};

export default Layout(Project);
