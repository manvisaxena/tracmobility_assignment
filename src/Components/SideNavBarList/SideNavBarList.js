import React from "react";
import Divider from "@material-ui/core/Divider";
import Beenhere from "@material-ui/icons/Beenhere";
import Create from "@material-ui/icons/Create";
import ViewList from "@material-ui/icons/ViewList";
import Settings from "@material-ui/icons/Settings";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import BorderColor from "@material-ui/icons/BorderColor";
import Delete from "@material-ui/icons/Delete";
import PermIdentity from "@material-ui/icons/PermIdentity";
import PermDeviceInformation from "@material-ui/icons/PermDeviceInformation";
import RoomService from "@material-ui/icons/RoomService";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "@material-ui/icons/Dashboard";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import "./SideNavBarList.css";

const menuItems = [
  [
    {
      icon: <Dashboard style={{ color: "#fff" }} />,
      text: "KPI Dashboard",
    },
  ],
  [
    {
      icon: <Beenhere style={{ color: "#fff" }} />,
      text: "Task Map",
    },
    {
      icon: <Create style={{ color: "#fff" }} />,
      text: "Task Creation",
      subMenuList: [
        {
          icon: <BorderColor style={{ color: "#fff" }} />,
          text: "Add Task",
        },
        {
          icon: <Delete style={{ color: "#fff" }} />,
          text: "Delete Task",
        },
      ],
    },
    {
      icon: <ViewList style={{ color: "#fff" }} />,
      text: "Task List",
    },
    {
      icon: <Settings style={{ color: "#fff" }} />,
      text: "Rate Setting",
    },
  ],
  [
    {
      icon: <DirectionsCar style={{ color: "#fff" }} />,
      text: "Vehicle Information",
    },
    {
      icon: <PermIdentity style={{ color: "#fff" }} />,
      text: "User Information",
    },
    {
      icon: <PermDeviceInformation style={{ color: "#fff" }} />,
      text: "Order Information",
    },
    {
      icon: <RoomService style={{ color: "#fff" }} />,
      text: "Customer Service",
    },
  ],
];

const showExpandIcon = (open) => {
  return open ? <ExpandLess /> : <ExpandMore />;
};

export default function SideNavBarList(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Typography className="companyName" variant="h6">
        TRACMOBILITY
      </Typography>
      <Divider />
      {menuItems.map((menuItemSet, index) => (
        <React.Fragment key={"d" + index}>
          <List component="nav">
            {menuItemSet.map((menuItem, subIndex) => (
              <React.Fragment key={"li-" + subIndex}>
                <ListItem
                  button
                  onClick={() => {
                    if (menuItem.subMenuList) {
                      setOpen(!open);
                    }
                  }}
                >
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.text} />
                  {menuItem.subMenuList && showExpandIcon(open)}
                </ListItem>
                {menuItem.subMenuList && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {menuItem.subMenuList.map((subItem, subSubIndex) => (
                        <ListItem
                          key={"sl-" + subSubIndex}
                          button
                          className="nested"
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}
