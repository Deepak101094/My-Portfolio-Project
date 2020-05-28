import React from "react";
import Layout from "../HOC/Layout";
import "./about.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
//import { green } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  card: {
    height: 240,
    marginTop: "2rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      height: 240,
     // width: '100%',
      marginTop: "1rem",
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    [theme.breakpoints.down("md")]: {
      height: 240,
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      height: 240,
      marginLeft: "5px",
      marginRight: "5px"
    }
  },

}));

const About = () => {
  const classes = useStyle();
  return (
    <div style={{position:"abolute"}}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={0} sm={1} />

          <Grid item xs={12} sm={10}>
            <div className="about">
              <h1> About me </h1> <div className="line" />
              <p>
                {" "}
                I am a Front End Developer and UI/UX Designer. I love to design
                awesome websites with great user experience. I am passionate
                about my work and i never get bore from my work because i love
                what i do. I write clean, elegant and efficient code because i
                believe that code is written to read (by humans as well) and not
                just to be executed by machines. I like to learn new
                technologies and keep myself updated. I work on HTML, CSS,
                JavaScript, ReactJs, JQuery, Bootstrap, React-Native etc. Apart
                from this, i like to play cricket and basketball ,listen
                music,singing song and travelling.
              </p>
            </div>

            <div className="cirtificate">
              <h1> certificate </h1>
              <div className="line" />
              <div className="card">
                <Card className={classes.card}>
                  <CardActionArea>
                    <div className="imagetest">
                      <img alt="javascript" src="https://udemy-certificate.s3.amazonaws.com/image/UC-a31df2ac-4308-4ada-a58c-8e3b3c8b8a77.jpg" />
                    </div>
                  </CardActionArea>
                  <Button size="small">
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/image/UC-a31df2ac-4308-4ada-a58c-8e3b3c8b8a77.jpg"
                      style={{ textDecoration: "none" }}
                    >
                      JavaScript Basic
                    </a>
                  </Button>
                </Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <div className="imagetest">
                      <img alt= "javascript advance" src="https://udemy-certificate.s3.amazonaws.com/image/UC-a364cccc-d6a9-4f91-81cd-f0e33fed2d34.jpg" />
                    </div>
                  </CardActionArea>
                  <Button size="small">
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/image/UC-a364cccc-d6a9-4f91-81cd-f0e33fed2d34.jpg"
                      style={{ textDecoration: "none" }}
                    >
                      JavaScript Advance
                    </a>
                  </Button>
                </Card>
                <Card className={classes.card}>
                <CardActionArea>
                  <div className="imagetest">
                    <img alt="react" src="https://udemy-certificate.s3.amazonaws.com/image/UC-4ae71880-03d5-4148-836c-6c5b239b5181.jpg" />
                  </div>
                </CardActionArea>
                <Button size="small">
                  <a
                    href="https://udemy-certificate.s3.amazonaws.com/image/UC-4ae71880-03d5-4148-836c-6c5b239b5181.jpg"
                    style={{ textDecoration: "none" }}
                  >
                    React
                  </a>
                </Button>
              </Card>
              </div>
            </div>

            <div className="button">
              <button className="main-button"> Download CV</button>
            </div>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout(About);
