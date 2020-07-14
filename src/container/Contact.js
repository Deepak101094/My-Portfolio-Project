import React, { useState } from "react";
import { useForm } from "react-hook-form";
//?hoc
import Layout from "../HOC/Layout";
import Footer from "../components/Footer";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import WarningIcon from "@material-ui/icons/Warning";
import axios from "axios";

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
  errorMsg: {
     margin: "10px 0px",
     color: "red"
  }
});

const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [ error, setError ] = useState(false);
  const [ successMsg, setSuccessMsg ] = useState(false);
  const { register, handleSubmit, errors} = useForm();

  const onSubmitHandler = (formdata, e) => {
    setLoading(true);
    const { name, email, message, subject } = formdata || {};
    const template_id = "template_cgr1DAkU";
    const payload = {
      message_html: message,
      from_name: name,
      subject,
      reply_to: email,
    };
    const data = {
      service_id: "deepakpandey101094@gmail.com",
      template_id,
      user_id: "user_oRLdrSf4l3hGgPbviktTK",
      template_params: {
        ...payload,
      },
    };

    axios({
      method: "POST",
      url: "https://api.emailjs.com/api/v1.0/email/send",
      data,
    })
      .then((res) => {
        setLoading(false);
       // console.log(res, "result");
      if(res.status === 200) {
         setSuccessMsg(true);
      }
      })
      .catch((err) => {
         setError(err)
       // console.log(err, "error");
      });
      e.target.reset();
  };

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
                  Contact Me{" "}
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
                    <LocationOnIcon /> Vrindavan Yojna2 Lucknow, Uttar Pradesh
                  </Typography>
                </Box>

                <Box component="form">
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <InputField
                      name="name"
                      label="Name"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="large"
                      inputRef={register({required: true})}
                    />
                    {errors.name && errors.name.type === "required" && (
                     <div className={classes.errorMsg}>
                       <WarningIcon /> Your Name is Required
                     </div>
                   )}
                    <br />
                    <InputField
                      name="email"
                      label="Email"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                      inputRef={register({required: true})}
                    />
                    {errors.email && errors.email.type === "required" && (
                     <div className={classes.errorMsg}>
                       <WarningIcon /> Your Email is Required!
                     </div>
                    )}
                    <br />
                    <InputField
                      name="subject"
                      label="Subject"
                      fullWidth={true}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                      inputRef={register({required: true})}
                    />
                    {errors.subject && errors.subject.type === "required" && (
                     <div className={classes.errorMsg}>
                       <WarningIcon /> pls tell me your subject type!
                     </div>
                    )}
                    <br />
                    <InputField
                      name="message"
                      id="outlined-multiline-static"
                      label="Message"
                      fullWidth={true}
                      multiline
                      rows={4}
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      inputRef={register({required: true})}
                    />
                    {errors.message && errors.message.type === "required" && (
                     <div className={classes.errorMsg}>
                       <WarningIcon /> pls write here your message!
                     </div>
                    )}
                    <br />
                    {loading ? (
                      <div style={{ textAlign: "center" }}>
                        {" "}
                        <CircularProgress />{" "}
                      </div>
                    ) : (
                       <div>
                      <Button
                        className={classes.button}
                        size="large"
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<SendIcon />}
                        type="submit"
                        disabled={
                           errors.name ||
                           errors.email ||
                           errors.subject ||
                           errors.message
                         }
                      >
                        Send Message
                      </Button>
                      {successMsg ? (
                         <h5>Mail Sent Successfully!</h5>
                      ) : (
                         <div>
                         {error ? (
                            <h5> Something went wrong!</h5>
                         ): null}
                         </div>
                      )}
                      </div>
                    )}
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
