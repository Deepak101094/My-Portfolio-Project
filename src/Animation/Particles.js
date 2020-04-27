import React from "react";
// import from react-particles
import Particles from "react-particles-js";
// import from material-ui
import { makeStyles } from "@material-ui/core/styles";


//css styles
const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3"
  }
});

const Particle = () => {
  const classes = useStyles();
  return (
    <>
      <Particles 
      canvasClassName= {classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "#8B4513"
              }
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
            
          },
        }}
      />
    </>
  );
};

export default Particle;
