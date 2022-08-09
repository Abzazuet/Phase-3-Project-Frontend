import TopNavbar from "./TopNavbar";
import Home from "./Home";
import Desserts from "./Desserts";
import AddDessert from "./AddDessert";
import DeleteDessert from "./DeleteDessert";
import UpdateDessert from "./UpdateDessert";
import Login from "./Login";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";

function App() {
  const [adminLogged, setAdminLogged] = useState(false);
  const [desserts, setDesserts] = useState([]);

  return (
    <div className="App">
        <TopNavbar adminLogged={adminLogged} setAdminLogged={setAdminLogged} />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route
            exact
            path="desserts"
            element={<Desserts desserts={desserts} setDesserts={setDesserts} />}
          />
          <Route
            exact
            path="login"
            element={
              <Login setLoggedIn={setAdminLogged} adminLogged={adminLogged} />
            }
          />
          <Route exact path="addDessert" element={<AddDessert />} />
          <Route
            exact
            path="deleteDessert"
            element={<DeleteDessert desserts={desserts} />}
          />
          <Route
            exact
            path="updateDessert"
            element={<UpdateDessert desserts={desserts} />}
          />
        </Routes>
    </div>
  );
}

export default App;
