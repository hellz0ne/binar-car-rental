import { Link } from "react-router-dom";
import "./section.css";

const Section = () => {
  return (
    <div className="section-container">
      <h1>Sewa Mobil di Bekasi Sekarang</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
      <Link to={"/carimobil"}>
        <a className="section-button">Mulai Sewa Mobil</a>
      </Link>
    </div>
  );
};

export default Section;
