import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/AddDessert.css";
function FormDessert({ selectedDessert, fetchRequest }) {
  const [params, setParams] = useState({
    name: "",
    ingredients: "",
    regimes: "",
    image: "",
    carbohydrates: "",
    proteins: "",
    fat: "",
  });
  const [regimes, setRegimes] = useState([]);
  useEffect(() => {
    if (selectedDessert !== undefined && selectedDessert.length !== 0) {
      setRegimes(selectedDessert[0].regimes);
      setParams({
        name: selectedDessert[0].name,
        ingredients: selectedDessert[0].ingredients,
        regimes: selectedDessert[0].regimes,
        image: selectedDessert[0].image,
        carbohydrates: selectedDessert[0].carbohydrates,
        proteins: selectedDessert[0].proteins,
        fat: selectedDessert[0].fat,
      });
    }
  }, [setParams, selectedDessert]);

  function handleChangeText(event) {
    setParams({
      ...params,
      [event.target.id]: event.target.value,
    });
    if (event.target.id === "ingredients") {
      setParams({
        ...params,
        [event.target.id]: event.target.value.split(","),
      });
    }
  }
  function handleCheckBox(event) {
    if (!regimes.includes(event.target.value)) {
      setRegimes([...regimes, event.target.value]);
      setParams({
        ...params,
        regimes: [...regimes, event.target.value],
      });
    } else {
      setRegimes(regimes.filter((regime) => regime !== event.target.value));
      setParams({
        ...params,
        regimes: regimes.filter((regime) => regime !== event.target.value),
      });
    }
  }

  return (
    <div className="background">
      <Form className="form" onSubmit={(e) => fetchRequest(e, params)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Dessert Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleChangeText}
            value={params.name}
          ></Form.Control>
          <Form.Text className="text-muted">Only for admin</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL"
            onChange={handleChangeText}
            value={params.image}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ingredients">
          <Form.Label>Food ingredients:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Separate with comma (,) Ex. milk,sugar,chocolate"
            onChange={handleChangeText}
            value={params.ingredients}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRegime">
          <Form.Label>Food regimes</Form.Label>
          <Form.Check
            type="checkbox"
            label="Sugar free"
            onChange={handleCheckBox}
            value="sugar free"
            checked={params.regimes.includes("sugar free")}
          />
          <Form.Check
            type="checkbox"
            label="Paleo"
            onChange={handleCheckBox}
            value="paleo"
            checked={params.regimes.includes("paleo")}
          />
          <Form.Check
            type="checkbox"
            label="Keto"
            onChange={handleCheckBox}
            value="keto"
            checked={params.regimes.includes("keto")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="carbohydrates">
          <Form.Label>Carbohydrates</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter grams"
            onChange={handleChangeText}
            required
            value={params.carbohydrates}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="proteins">
          <Form.Label>Proteins</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter grams"
            onChange={handleChangeText}
            required
            value={params.proteins}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fat">
          <Form.Label>Fats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter grams"
            onChange={handleChangeText}
            required
            value={params.fat}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default FormDessert;
