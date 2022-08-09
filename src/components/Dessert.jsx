import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../styles/Dessert.css";
function Dessert({ dessert }) {
  const [showIngredient, setShowIngredient] = useState(false);
  function handleClick() {
    setShowIngredient(!showIngredient);
  }

  if (!showIngredient) {
    return (
      <Card style={{ width: "18rem" }} className="card-style">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{dessert.name}</Card.Title>
          <Card.Subtitle className="mb-2 subtitle">
            Macronutrients
          </Card.Subtitle>
          <span>Carbohydrates: {dessert.carbohydrates} g</span> <br />
          <span>Proteins: {dessert.proteins} g</span> <br />
          <span>Fat: {dessert.fat} g</span> <br />
          <Card.Subtitle className="mb-1 subtitle mt-2">
            Food regimes
          </Card.Subtitle>
          <Card.Text>
            {dessert.regimes.map((regime) => (
              <span key={regime}>*{regime} </span>
            ))}
          </Card.Text>
          <Button variant="primary" className="btn" onClick={handleClick}>
            Ingredients
          </Button>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card style={{ width: "18rem" }} className="card-style">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{dessert.name}</Card.Title>
          <Card.Subtitle className="mb-2 subtitle">Ingredients</Card.Subtitle>
          <Card.Text>
            {dessert.ingredients.map((ingredient) => (
              <span key={ingredient}>
                {ingredient} <br />
              </span>
            ))}
          </Card.Text>

          <Button variant="primary" className="btn" onClick={handleClick}>
            Nutrition
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Dessert;
