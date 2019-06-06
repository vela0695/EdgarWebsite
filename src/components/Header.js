import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { SocialIcon } from "react-social-icons";
import "../main.css";

const styles = theme => ({
  root: {
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0"
  },
  grow: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20
  // },
  title: {
    // display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: "1.9em !important",
      fontFamily: "cursive !important"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    showIcons: false
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    console.log(event);
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = type => {
    console.log(type);
    if (type == 1) {
      window.open("https://github.com/vela0695");
    }
    if (type == 2) {
      window.open(
        "https://www.linkedin.com/in/edgar-velazquez-colin-7b946415b?trk=people-guest_profile-result-card_result-card_full-click"
      );
    }
    if (type == 3) {
      window.open("mailto:edgarvelazz23@gmail.com");
    }
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        disableAutoFocusItem={true}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={() => this.handleMobileMenuClose(1)}>
          <SocialIcon
            url="https://github.com/vela0695"
            style={{ height: 45, width: 45 }}
          />
          <p>GitHub</p>
        </MenuItem>
        <MenuItem onClick={() => this.handleMobileMenuClose(2)}>
          <SocialIcon
            style={{ height: 45, width: 45 }}
            url="https://www.linkedin.com/in/edgar-velazquez-colin-7b946415b?trk=people-guest_profile-result-card_result-card_full-click"
          />
          <p>LinkedIn</p>
        </MenuItem>
        <MenuItem onClick={() => this.handleMobileMenuClose(3)}>
          <SocialIcon
            style={{ height: 45, width: 45 }}
            url="mailto:edgarvelazz23@gmail.com"
            network="email"
          />
          <p>Contact Me</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "lightblue" }}>
          <Toolbar>
            {/*
             Will take care of this once i have the content on the page
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Edgar Colin
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div style={{ padding: "5px" }}>
                <SocialIcon url="https://github.com/vela0695" />
              </div>
              <div style={{ padding: "5px" }}>
                <SocialIcon url="https://www.linkedin.com/in/edgar-velazquez-colin-7b946415b?trk=people-guest_profile-result-card_result-card_full-click" />
              </div>
              <div style={{ padding: "5px" }}>
                <SocialIcon
                  url="mailto:edgarvelazz23@gmail.com"
                  network="email"
                />
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* {renderMenu} */}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
