import React from "react";
import ButtonComponent from "./ButtonComponent";
import ContactComponent from "./ContactComponent";
import ProductComponent from "./ProductComponent";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Link from "@material-ui/core/Link";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: "5px",
    color: "inherit",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              <Link to="/about" className={classes.link}>
                Button
              </Link>
              <Link to="/contact" className={classes.link}>
                Contacts
              </Link>
              <Link to="/products" className={classes.link}>
                Products
              </Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Route exact path="/about" component={ButtonComponent}/>
        <Route exact path="/contact" component={ContactComponent} />
        <Route exact path="/products" component={ProductComponent} />
      </div>
    </Router>
  );
}
