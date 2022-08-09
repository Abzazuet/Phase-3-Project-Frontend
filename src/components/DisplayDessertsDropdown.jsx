import { Form } from "react-bootstrap";
import "../styles/DisplayDessertsDropdown.css";
import { useState } from "react";
import FormDessert from "./FormDesserts";
import { useNavigate } from "react-router-dom";
function DisplayDessertsDropdown({ desserts, fetchRequest }) {
  const navigate = useNavigate();
  const [selectedDessert, setSelectedDessert] = useState([]);
  function handleDessert(event) {
    setSelectedDessert(
      desserts.filter((dessert) => dessert.name === event.target.value)
    );
  }
  let requestType = fetchRequest === "update" ? "PUT" : "DELETE";
  function fetchFunction(e, params) {
    e.preventDefault();
    fetch(
      `https://immense-garden-31850.herokuapp.com/desserts/${selectedDessert[0].id}`,
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
      <Form.Select
        aria-label="Default select example"
        className="menu"
        size="lg"
        onChange={handleDessert}
      >
        <option>Select dessert</option>
        {desserts.map((dessert) => (
          <option key={dessert.id}>{dessert.name}</option>
        ))}
      </Form.Select>
      <FormDessert
        selectedDessert={selectedDessert}
        fetchRequest={fetchFunction}
      />
    </div>
  );
}
export default DisplayDessertsDropdown;
