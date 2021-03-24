import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserListTable from "../UserListTable/UserListTable";
import TextField from "@material-ui/core/TextField";

import "./UserList.css";

function UserList(props) {
  return (
    <Paper className="paper" elevation={3}>
      <div className="paperContent paperHeader">
        <div className="paperHeading">
          <Typography variant="h6"> User List</Typography>
        </div>
        <div>
          <TextField
            variant="outlined"
            color="primary"
            label="Search User"
          />
        </div>
      </div>
      <div className="paperContent">
        <UserListTable data-testid="fetch-data"></UserListTable>
      </div>
    </Paper>
  );
}

export default UserList;
