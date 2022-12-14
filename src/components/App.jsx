import TopNavbar from "./TopNavbar";
import Contact from "./Contact";
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
import { useEffect } from "react";


function App() {
  const [adminLogged, setAdminLogged] = useState(false);
  const [desserts, setDesserts] = useState([]);
  const [dessertsInCart, setDessertsInCart] = useState([]);
  useEffect(() => {
    fetch("https://desserts-db.herokuapp.com/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, [setDesserts]);

  const handleDessertInCart = (dessert) => {
    if (dessertsInCart.some(d => d.id === dessert.id)) {
      window.alert(`${dessert.name} is already in the cart`);
    }
    else {
      setDessertsInCart([
        ...dessertsInCart,
        dessert
      ])
      window.alert(`${dessert.name} has been added to the cart`);
    }
  }

  function handleDeleteDessertInCart(dessertsToRemove) {
    setDessertsInCart(dessertsInCart.filter(dessert => dessert.id !== dessertsToRemove.id))
  }
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
            element={<Desserts desserts={desserts} handleDessertInCart={handleDessertInCart} setDesserts={setDesserts} setDessertsInCart={setDessertsInCart} />}
          />
          <Route
            path="/login"
            element={
              <Login setLoggedIn={setAdminLogged} adminLogged={adminLogged} />
            }
          />
          <Route
            path="/addDessert"
            element={<AddDessert />} />
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
            element={<Cart desserts={dessertsInCart} handleDeleteDessertInCart={handleDeleteDessertInCart} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
