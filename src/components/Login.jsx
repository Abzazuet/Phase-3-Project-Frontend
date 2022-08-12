import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/Login.css'
import { useState } from "react";
function Login({ setLoggedIn, adminLogged }) {
  const [logData, setLogData] = useState({ login: '', password: '' });

  function onChangeData(event) {
    setLogData({
      ...logData,
      [event.target.id]: event.target.value,
    });
    console.log(logData)
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (adminLogged) {
      setLoggedIn(!adminLogged);
      window.alert("Logged out");
      setLogData({
        login: "",
        password: "",
      });
    } else if (
      logData.login === "daniela" &&
      logData.password === "daniela97"
    ) {
      setLoggedIn(true);
      window.alert("Admin option enabled");
      setLogData({
        login: "",
        password: "",
      });
    } else {
      setLoggedIn(false);
      window.alert("Wrong username or password");
    }
  }
  return (
    <div className="background">
      <div className="phrase-container">
        <h1>Administrator login</h1>
      </div>
      <Box className="form" onSubmit={handleSubmit} component="form"
        noValidate
        autoComplete="off">
        <div>
          <TextField
            required
            fullWidth
            id="login"
            label="Login"
            margin="dense"
            onChange={onChangeData}
            value={logData.login}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            margin="dense"
            type="password"
            onChange={onChangeData}
            value={logData.password}
          />
          <p>This form is used to validate Admin login and enable editing functions</p>
          <Button variant="contained" style={{background:'#d83bd8' }} type="submit">{adminLogged ? "Log out" : "Log in"}</Button>

        </div>
      </Box>
    </div>
  );
}
export default Login;
