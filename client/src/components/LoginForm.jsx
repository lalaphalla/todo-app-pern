
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
// import { fetchAllTask } from "./LoginForm";
import { useLoginMutation } from "../store";
import Cookies from 'js-cookie';

function LoginForm() {
  const [login, results] = useLoginMutation();
  

  function handleSubmit(event){
    event.preventDefault();
    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    login(data)
    console.log(document.cookie);
    const ck = Cookies.get();
    console.log(ck);
  }
  function handleCancel(){

  }
  return (
    <>
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
                  Email
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
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
                  Password
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                
                <TextField
                  id="password"
                  label="Password"
                  name="password" 
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} />
              <Grid item xs={12} sm={4}>
                <Button type="submit" variant="contained">
                  Login
                </Button>
                <Button onClick={handleCancel} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
        </form>
      </Paper>
    </>
  );
}

export default LoginForm;
// export const fetchAllTask = async (setState) => {
//     const res = await fetch("http://localhost:3000/api/v1/tasks");
//     const resData = await res.json();
//     setState(resData.data.tasks);
//   };