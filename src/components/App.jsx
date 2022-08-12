import TopNavbar from "./TopNavbar";
import Home from "./Home";
import Desserts from "./Desserts";
import AddDessert from "./AddDessert";
import DeleteDessert from "./DeleteDessert";
import UpdateDessert from "./UpdateDessert";
import Cart from "./Cart";
import Login from "./Login";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";
import { CssBaseline } from "@mui/material";
import Container from '@mui/material/Container';


function App() {
  const [adminLogged, setAdminLogged] = useState(false);
  const [desserts, setDesserts] = useState([]);

  return (
    <div className="App background">
      <TopNavbar adminLogged={adminLogged} setAdminLogged={setAdminLogged} />
      <CssBaseline />
      <Container className="content">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/desserts"
            element={<Desserts desserts={desserts} setDesserts={setDesserts} />}
          />
          <Route
            path="/login"
            element={
              <Login setLoggedIn={setAdminLogged} adminLogged={adminLogged} />
            }
          />
          <Route
            path="/addDessert"
            element={<AddDessert/>} />
          <Route
            path="/deleteDessert"
            element={<DeleteDessert desserts={desserts} />}
          />
          <Route
            path="/updateDessert"
            element={<UpdateDessert desserts={desserts} />}
          />
          <Route

            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
