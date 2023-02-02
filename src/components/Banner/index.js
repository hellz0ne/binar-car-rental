import "./banner.css";
import imgCar from "./../../asset/img_car.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <div>
          <h1>Sewa & Rental Mobil Terbaik di kawasan Bekasi</h1>
          <h2>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h2>
          <Link to={"/carimobil"}>
            <button className="banner-button">Mulai Sewa Mobil</button>
          </Link>
        </div>
        <div>
          <img src={imgCar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
