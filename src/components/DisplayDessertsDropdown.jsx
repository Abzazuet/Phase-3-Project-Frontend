import "../styles/DisplayDessertsDropdown.css";
import { useState } from "react";
import FormDessert from "./FormDesserts";
import { useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



function DisplayDessertsDropdown({ desserts, fetchRequest }) {
  const navigate = useNavigate();
  const [selectedDessert, setSelectedDessert] = useState([]);
  function handleDessert(event) {
    setSelectedDessert(
      desserts.filter((dessert) => dessert.name === event.target.value.name)
    );
  }
  let requestType = fetchRequest === "update" ? "PUT" : "DELETE";
  function fetchFunction(e, params) {
    e.preventDefault();
    fetch(
      `https://desolate-taiga-53492.herokuapp.com/desserts/${selectedDessert[0].id}`,
      {
        method: requestType,
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      window.alert(`Dessert ${requestType === "PUT" ? "updated" : "deleted"}`);
      navigate("/desserts");
    });
  }
  return (
    <div>
      <FormControl className="menu">
        <InputLabel id="demo-simple-select-label" className="dessert-title">Select Dessert</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="none"
          value={selectedDessert.name}
          onChange={handleDessert}
          label="SelectedDessert"
        >
          <MenuItem value="none"></MenuItem>
          {desserts.map((dessert) => (
            <MenuItem key={dessert.id}
              value={dessert}>{dessert.name}</MenuItem>
          ))}

        </Select>
      </FormControl>
      <FormDessert
        selectedDessert={selectedDessert}
        fetchRequest={fetchFunction}
      />


    </div>

  );
}
export default DisplayDessertsDropdown;

