import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import MainTopbar from "./Components/MainTopbar/MainTopbar";
import SideNavBarList from "./Components/SideNavBarList/SideNavBarList";
import UserList from "./Components/UserList/UserList";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#03989E",
    },
    secondary: {
      main: "#FF69B4",
    },
  },
});

function App(props) {
  return (
    <div className="root">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainTopbar />
        <nav>
          <Drawer
            classes={{
              paper: "drawerPaper",
            }}
            variant="permanent"
            open
          >
            <SideNavBarList />
          </Drawer>
        </nav>
        <main className="content">
          <div className="toolbar" />
          <UserList></UserList>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
