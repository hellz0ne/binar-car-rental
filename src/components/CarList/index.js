import { Link } from "react-router-dom";
import "./carlist.css";

const CarList = ({ data }) => {
  return (
    <div className="car-container">
      {data.length > 0 &&
        data.map((item) => (
          <div className="car-card-container">
            <div clasName="car-card-content">
              <div className="car-image">
                <img src={item.image} alt="" />
              </div>
              <div className="car-detail">
                <h1>{item.name}</h1>
                <h2>Rp. {item.price} / hari</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              </div>
            </div>
            <Link to={`/detailmobil/${item.id}`}>
              <a className="car-select">Pilih Mobil</a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CarList;
