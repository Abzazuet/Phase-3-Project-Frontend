import Dessert from "./Dessert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";

function Desserts({ desserts, setDesserts }) {
  useEffect(() => {
    fetch("https://desolate-taiga-53492.herokuapp.com/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, [setDesserts]);
  return (
    <div className="background">
      <Container>
        <Row>
          {desserts.map((dessert) => (
            <Dessert key={dessert.id} dessert={dessert} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Desserts;
