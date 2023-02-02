import "./bannercar.css";
import imgCar from "./../../asset/img_car.png";

const BannerCar = () => {
  return (
    <div className="bannercar-wrapper">
      <div className="bannercar-container">
        <div>
          <h1>Sewa & Rental Mobil Terbaik di kawasan Bekasi</h1>
          <h2>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h2>
        </div>
        <div>
          <img src={imgCar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerCar;
