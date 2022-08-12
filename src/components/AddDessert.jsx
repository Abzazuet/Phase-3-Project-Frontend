import FormDesserts from "./FormDesserts";
import "../styles/Home.css";


function AddDessert() {
  function fetchAdd(e, params) {
    e.preventDefault();
    fetch("https://immense-garden-31850.herokuapp.com/desserts", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => window.alert("Dessert added"));
  }
  return (
    <div>
      <FormDesserts fetchRequest={fetchAdd}/>;
    </div>
  )
}
export default AddDessert;