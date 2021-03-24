import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

import "./MainTopbar.css";

export default function MainTopbar() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar className="toolBar">
        <TextField
          className="searchbar"
          color="primary"
          label="Search for ..."
        />
        <div className="topBarButtons">
          <IconButton className="topBarButton" color="inherit">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton className="topBarButton" color="inherit">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Button>
            <Avatar
              className="topBarButton"
              alt="MS"
              src="https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=6&m=1089633230&s=612x612&w=0&h=FUHE3jCQMIrC72Ux8-rz_z3mHDi2UB61gceLSKAxEwg="
            />
            Manvi Saxena
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
