import React from "react";
//?own component
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
//@material-ui import
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
  List,
  Box,
  Divider,
  Avatar,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import { Apps, Home, ContactMail, AssignmentInd } from "@material-ui/icons";
import avatar from "../../avatar.png";
//? next.js import
import { useHistory } from "react-router-dom";

//CSS styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
    },
    menuSliderContainer: {
      width: 250,
      height: "100%",
      background: "#2F4F4F",
    },
    avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    listItem: {
      color: "white",
    },
  })
);

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <InfoIcon />, listText: "About", listPath: "/about" },
  { listIcon: <Apps />, listText: "Project", listPath: "/project" },
  { listIcon: <ContactMail />, listText: "Contacts", listPath: "/contacts" },
];

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Deepak" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box className={classes.root} component="nav">
        <AppBar position="fixed" style={{ background: "#2F4F4F" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={toggleSlider("right", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              <Button color="inherit" onClick={() => history.push("/")}>
                Portfolio
              </Button>
            </Typography>
            <MobilRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>

            <Button color="inherit" onClick={() => history.push("/resume")}>
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Header;
