import React from "react";
import Layout from "../HOC/Layout";
import "./about.css";
import Resume from "../images/Deepak's Resume.pdf";
//?material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    // background: "#233",
    height: "100vh",
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={0} sm={1} />

          <Grid item xs={12} sm={10}>
            <div className="about">
              <h1> About me </h1> <div className="line" />
              <p>
                {" "}
                I'm a Front-end developer having 2 years of experience in creating
            dynamic and user-friendly websites using ReactJs. I write good
            quality code by following the best practices and I always keep the
            user-experience and performance in mind. My daily work includes
            creating pixel-perfect and responsive layouts and then adding life
            to it using Javascript. My tech stack is ReactJs, Redux, HTML/CSS,
            Bootstrap, Material UI, Javascript, NextJs, Tailwind CSS, React
            Native, Styled Components.
              </p>
            </div>

            <div className="cirtificate">
              <h1> certificate </h1>
              <div className="line" />
              <div className="row p-3">
                <div className="col-md-4">
                  <div className="certificate-card">
                    <div className="certificate-card-image">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        alt="javascript"
                        src="https://udemy-certificate.s3.amazonaws.com/image/UC-a31df2ac-4308-4ada-a58c-8e3b3c8b8a77.jpg"
                      />
                    </div>
                    <div className="certificate-card-button mt-2">
                      <a
                        href="https://udemy-certificate.s3.amazonaws.com/image/UC-a31df2ac-4308-4ada-a58c-8e3b3c8b8a77.jpg"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        JavaScript Basic
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="certificate-card">
                    <div className="certificate-card-image">
                      <img
                        alt="react"
                        style={{ width: "100%", height: "100%" }}
                        src="https://udemy-certificate.s3.amazonaws.com/image/UC-4ae71880-03d5-4148-836c-6c5b239b5181.jpg"
                      />
                    </div>
                    <div className="certificate-card-button mt-2">
                      <a
                        href="https://udemy-certificate.s3.amazonaws.com/image/UC-a364cccc-d6a9-4f91-81cd-f0e33fed2d34.jpg"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        React
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="certificate-card">
                    <div className="certificate-card-image">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        alt="javascript advance"
                        src="https://udemy-certificate.s3.amazonaws.com/image/UC-a364cccc-d6a9-4f91-81cd-f0e33fed2d34.jpg"
                      />
                    </div>
                    <div className="certificate-card-button mt-2">
                      <a
                        href="https://udemy-certificate.s3.amazonaws.com/image/UC-4ae71880-03d5-4148-836c-6c5b239b5181.jpg"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        JavaScript Advance
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="button">
              <a
                style={{ textDecoration: "none" }}
                href={Resume}
                download="Deepak CV"
              >
                <button className="main-button"> Download CV</button>
              </a>
            </div>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout(About);
