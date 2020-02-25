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

const columns = [
  { id: "name", label: "Username", minWidth: 170 },
  { id: "level", label: "Pet Level", minWidth: 100 },
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

// formatRows = () => {
//   const rows = data.map(data => {
//     if (data) {

//       return {
//         name: Users.username,
//         level:
//         totalExperience:
//         completed:
//         streak:
//       };
//     }
//   });
//   return rows;
// };

function createData(name, level, totalExperience, completed, streak) {
  return { name, level, totalExperience, completed, streak };
}

const rows = [
  createData("India", 1, 1324171354, 3287263, 1),
  createData("China", "CN", 1403500365, 9596961, 2),
  createData("Italy", "IT", 60483973, 301340, 1),
  createData("United States", "US", 327167434, 9833520, 2),
  createData("Canada", "CA", 37602103, 9984670, 5)
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function Scoreboard() {
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
