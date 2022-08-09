import Carousel from "react-bootstrap/Carousel";
import image from "../img/background.jpeg";
import testimonial1 from "../img/testimonial1.jpeg";
import testimonial2 from "../img/testimonial2.jpeg";
import "../styles/Testimonials.css";
function Testimonials() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={testimonial1} alt="First slide" />
        <Carousel.Caption className="background-fix">
          <h3>Cafeteria Il Bolbo </h3>
          <p>
            We started buying this desserts due to the great variety of regimes
            they have.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />

        <Carousel.Caption className="background-fix">
          <h3>Coffee Shop </h3>
          <p>Best desserts ever</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={testimonial2} alt="Third slide" />

        <Carousel.Caption className="background-fix">
          <h3>Cafeteria Balboa</h3>
          <p>We sell this desserts like hot potato.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;
