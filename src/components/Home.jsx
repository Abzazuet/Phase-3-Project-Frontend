import "../styles/Home.css";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <div className="phrase-container">
        <h1>Mardaf</h1>
        <h2>
          Somos una compania dedicada a hacer postres de alta calidad y nutrititivos, aptos para un estilo de vida saludable
        </h2>
        <h1>Testimoniales</h1>
        <Testimonials />
      </div>

    </div>
  );
}
export default Home;
