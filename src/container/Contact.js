import React from "react";
import { useForm,Controller } from "react-hook-form";
//?hoc
import Layout from "../HOC/Layout";
//? material-ui
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Footer from "../components/Footer";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomoto",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

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
    color: "#ffffff",
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "white",
    background: "green",
  },
});

const Contact = () => {
  const classes = useStyles();
   const { register, handleSubmit } = useForm();
   const onSubmitHandler = (data) => {
    console.log(data);
   }

  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={3} />
      <Grid item xs={12} sm={6} md={6}>
        <Paper>
          <Box component="div" className={classes.rootContainer}>
            <Grid container justify="center">
              <Box component="div">
                <Typography
                  variant="h2"
                  style={{ color: "#ffffff", marginTop: "2rem" }}
                >
                  {" "}
                  Contact{" "}
                </Typography>
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
                  <form  onSubmit={handleSubmit(onSubmitHandler)}>
                    <InputField
                      label="Name"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                      inputRef={register}
                    />
                    <br />
                    <InputField
                      label="Email"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                      inputRef={register}
                    />
                    <br />
                    <InputField
                      label="Subject"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                      inputRef={register}
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
                      inputRef={register}
                    />
                    <br />
                    <Button
                      className={classes.button}
                      size="large"
                      variant="outlined"
                      fullWidth={true}
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </Button>
                  </form>
                </Box>
                <Box component="div" style={{ marginTop: "3rem" }}>
                  <Footer />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={3} />
    </Grid>
  );
};
export default Layout(Contact);
