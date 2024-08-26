import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export default function TaskForm() {
  const submitData = async (data) => {
    console.log(data);
    const res = await fetch("http://localhost:3000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.ok);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const taskData = { ...data, user_id: 2 };
    submitData(taskData);
    // if(!res.ok){
    //     console.log('error');
    //     return
    // }
  }

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
              Task Form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Title
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Content
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="outlined-multiline-static"
                  label="Content"
                  name="description"
                  multiline
                  fullWidth
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} />
              <Grid item xs={12} sm={4}>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
        </form>
      </Paper>
    </React.Fragment>
  );
}
