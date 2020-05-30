import React from "react";
import { useForm } from "react-hook-form";
//?hoc
import Layout from "../HOC/Layout";
//? material-ui
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Box, Grid, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from "../components/Footer";

const InputField = withStyles({
 root: {
     "& label.Mui-focused": {
         color: 'tomoto'
     },
     "& label": {
         color: 'tan'
     },
     "& .MuiOutlinedInput-root": {
         "& fieldset" : {
             borderColor: "tan"
         },
         "&:hover fieldset": {
             borderColor: "tan"
         }
     }
 }
})(TextField)

const useStyles = makeStyles({
  rootContainer: {
    marginTop: "4rem",
    alignItems: "center",
    background: "#233",
    height: "100%",
  },
  line: {
    margin: "0 auto",
    border: "2px solid green",
    width: "100px",
  },
  detail: {
    marginTop: "4rem",
    color: "#ffffff"
  },
  button: {
      marginTop: '1rem',
      color: 'white',
      borderColor: 'white',
      background: "green"
  }

});

const Contact = () => {
  const classes = useStyles();
 // const { register, handlerSubmit } = useForm();
  return (
    <Box component="div" className={classes.rootContainer}>
      <Grid container justify="center">
        <Box component="div">
          <Typography variant="h2" style={{color:'#ffffff', marginTop: '2rem' }}> Contact </Typography>
          <div className={classes.line} />
          <Box className={classes.detail}>
            <Typography style={{ marginBottom: "1rem" }}>
              <MailOutlineIcon /> deepakpandey101094@gmail.com
            </Typography>
            <Typography style={{ marginBottom: "1rem" }}>
              <PhoneIcon /> +91-6392453922
            </Typography>
            <Typography style={{ marginBottom: "1rem" }}>
              <LocationOnIcon /> Vrinadvan Yojna Lucknow, Uttar Pradesh
            </Typography>
          </Box>

          <Box component="form">
           <form>  
            <InputField
              label="Name"
              fullWidth={true}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              
            />
            <br />
            <InputField
              label="Email"
              fullWidth={true}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              label="Subject"
              fullWidth={true}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              id="outlined-multiline-static"
              label="Message"
              fullWidth={true}
              multiline
              rows={4}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"             
            />
            <br />
            <Button className={classes.button} size="large" variant="outlined" fullWidth={true} endIcon={<SendIcon />}> 
            Send Message
             </Button>
             </form>
          </Box>
          <Box component="div" style={{marginTop: '3rem'}}>
           <Footer />
           </Box>
        </Box>
      </Grid>
    </Box>
  );
};
export default Layout(Contact);
