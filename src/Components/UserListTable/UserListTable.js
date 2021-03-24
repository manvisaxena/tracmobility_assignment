import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { fetchVList } from "../../Redux/actions";
import { Button } from "@material-ui/core";
import "./UserListTable.css";

class UserListTable extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.props.fetchVList(0, 10);
  }

  handleChangePage = async (e, pagenumber) => {
    await this.props.fetchVList(pagenumber, 10);
    this.setState({
      currentPage: pagenumber,
    });
  };

  render() {
    let userList = this.props.userList.userList;
    
    return this.props.userList &&
    userList.length !== 0 ? (
      <div data-testid="show-data">
        <TableContainer>
          <Table aria-labelledby="tableTitle" aria-label="enhanced table">
            <TableHead>
              <TableRow>
                <TableCell className="tableColumnName">User ID</TableCell>
                <TableCell className="tableColumnName">Name</TableCell>
                <TableCell className="tableColumnName">Email</TableCell>
                <TableCell className="tableColumnName">Address</TableCell>
                <TableCell className="tableColumnName">Phone</TableCell>
                <TableCell className="tableColumnName">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((el, index) => (
                <TableRow key={"el-" + index}>
                  <TableCell className="tableColumnValue">
                    {el.id}
                  </TableCell>
                  <TableCell className="tableColumnValue">
                    {el.name}
                  </TableCell>
                  <TableCell>{el.email}</TableCell>
                  <TableCell>
                    [{el.address.suite}, {el.address.city}]
                  </TableCell>
                  <TableCell>{el.phone}</TableCell>
                  <TableCell>
                    <Button color="primary">Edit</Button>
                    <Button color="secondary">Status</Button>
                    <Button color="primary">Change City/Region</Button>
                  </TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={userList.length}
          rowsPerPage={10}
          page={this.state.currentPage}
          onChangePage={this.handleChangePage}
        />
      </div>
    ) : (
      <div data-testid="loading">Loading...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVList: (page, size) => dispatch(fetchVList(page, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListTable);
