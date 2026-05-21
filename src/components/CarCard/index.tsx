import "./styles.css";
import carImg from "../../assets/car-card.svg";

export default function CarCard() {
  return (
    <>
      <div className="car-card">
        <img src={carImg} alt="Car" />
        <h4>Lorem ipsum dolor</h4>
      </div>
    </>
  );
}
