import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  SentimentSatisfied,
  PictureInPicture,
  ViewModule,
  PermIdentity,
  DeveloperMode,
  ContactMail
} from "@material-ui/icons";
import { SocialIcon } from "react-social-icons";
import "../main.css";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
const styles = theme => ({
  /* CSS for the NAV bar */
  root: {
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0"
  },
  grow: {
    flexGrow: 1
  },
  /* Hambuger Menu */
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: "1.9em !important",
      fontFamily: "cursive !important",
      cursor: "default !important"
    }
  },
  /* Right Links */
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

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    hmobileMoreAnchorEl: null,
    hamburgerMenu: false
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null, hamburgerMenu: false });
    this.handleMobileMenuClose();
  };

  /* Opens links menu */
  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  /* Opens hamburger menu */
  openHamburger = event => {
    this.setState({
      hamburgerMenu: !this.state.hamburgerMenu,
      hmobileMoreAnchorEl: event.currentTarget
    });
  };

  /* Scroll when clicking hamburger menu links */
  moveToSection = target => {
    scroller.scrollTo(target, {
      duration: 1000,
      smooth: true,
      offset: window.innerWidth > 752 ? -64 : -56
    });
    this.setState({ anchorEl: null, hamburgerMenu: false });
  };

  /* Clicking on links */
  handleMobileMenuClose = type => {
    if (type == 1) {
      window.open("https://github.com/vela0695");
    }
    if (type == 2) {
      window.open(
        "https://www.linkedin.com/in/edgar-velazquez-colin-7b946415b?trk=people-guest_profile-result-card_result-card_full-click"
      );
    }
    if (type == 3) {
      window.open("mailto:vela0695@vandals.uidaho.edu");
    }
    this.setState({
      mobileMoreAnchorEl: null,
      hmobileMoreAnchorEl: null,
      hamburgerMenu: false
    });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, hmobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    /* Menu with links on top right */
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
            url="mailto:vela0695@vandals.uidaho.edu"
            network="email"
          />
          <p>Contact Me</p>
        </MenuItem>
      </Menu>
    );

    const renderHamburgerMenu = (
      <Menu
        disableAutoFocusItem={true}
        anchorEl={hmobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={this.state.hamburgerMenu}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={() => this.moveToSection("about")}>
          <SentimentSatisfied />
          <p>About</p>
        </MenuItem>
        <MenuItem onClick={() => this.moveToSection("projects")}>
          <ViewModule />
          <p>Projects</p>
        </MenuItem>
        <MenuItem onClick={() => this.moveToSection("certifications")}>
          <PictureInPicture />
          <p>Certifications</p>
        </MenuItem>
        <MenuItem onClick={() => this.moveToSection("resume")}>
          <PermIdentity />
          <p>Resume</p>
        </MenuItem>
        <MenuItem onClick={() => this.moveToSection("skills")}>
          <DeveloperMode />
          <p>Skills</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.open("mailto:vela0695@vandals.uidaho.edu");
            this.setState({ anchorEl: null, hamburgerMenu: false });
          }}
        >
          <ContactMail />
          <p>Contact Me</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "navy" }}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.openHamburger}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Edgar Colin
            </Typography>
            {/* Pushes icons to the right corner  */}
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
                  url="mailto:vela0695@vandals.uidaho.edu"
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
        {/* Both menu's when they're open */}
        {renderHamburgerMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
