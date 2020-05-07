import React from "react";
import Layout from "../HOC/Layout";
import "./about.css";
import CssBaseline from "@material-ui/core/CssBaseline";
//import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
//import { green } from "@material-ui/core/colors";


const About = () => {
  //const classes = useStyle();
  return (
    <div className="base">
      <CssBaseline />
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={0} sm={1} />

          <Grid item xs={12} sm={10}>
            <div className="about">
              <h1> About me </h1>{" "}
              <div className="line" />
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
             <h1> cirtificate </h1>
             <div className="line" />
            <div className="card">
            
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
