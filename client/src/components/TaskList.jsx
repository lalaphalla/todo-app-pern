import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../store/task";
// import { fetchAllTask } from "./LoginForm";
import { useFetchTasksQuery } from "../store";

export default function TaskList() {
  // const tasksab = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState();
  const { data, error, isLoading } = useFetchTasksQuery();
  // const result = useFetchTasksQuery();
  let contents;
  if (isLoading) {
    console.log("loading");
  } else if (error) {
    console.log("error");
  } else {
    console.log(contents);
    contents = data.data.tasks;
  }
  // useEffect(() => {
  // console.log(data, error, isLoading);
  // console.log(result);
  // dispatch(tasksActions.getAllTask());
  // console.log(tasksab && tasksab);
  // fetchAllTask(setTasks);
  // setTasks(data.data.tasks)
  // }, []);

  return (
    <>
      <h1>Tasklist</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contents &&
              contents.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
