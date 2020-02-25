import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Users } from "../../../api/users";
import { Pets } from "../../../api/pets";
import { withTracker } from "meteor/react-meteor-data";

const columns = [
  { id: "name", label: "Username", minWidth: 170 },
  {
    id: "totalExperience",
    label: "Total Experience",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "completed",
    label: "Completed Task",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "streak",
    label: "Streak",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(0)
  }
];

function createData(name, totalExperience, completed, streak, _id) {
  return { name, totalExperience, completed, streak, _id };
}

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

function Scoreboard(props) {
  const rows = [];

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("Scoreboard Props", props);
  props.users[0] &&
    props.users.map(user => {
      rows.push(
        createData(
          user.username,
          user.exp,
          user.tasksCompleted,
          user.streak,
          user._id
        )
      );
    });
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {console.log("Row:", row)}
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default withTracker(() => {
  Meteor.subscribe("users");
  Meteor.subscribe("pets");
  return {
    users: Users.find({}).fetch(),
    pets: Pets.find({}).fetch()
  };
})(Scoreboard);
