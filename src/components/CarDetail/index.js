import "./cardetail.css";
import userLogo from "../../asset/fi_users.png";

const CarDetail = (props) => {
  const { car, include, exclude, refund, formatRupiah } = props;
  return (
    <div className="car-detail-container">
      <div className="TaC-container">
        <h1>Tentang Paket</h1>
        <div className="include">
          {" "}
          <h2>Include</h2>
          <ul>
            {include.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="exclude">
          <h2>Exlude</h2>
          <ul>
            {exclude.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="refund">
          <h2>Refund, Reschedule, Overtime</h2>
          <ul>
            {refund.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="detail-container">
        {car ? (
          <div className="detail-content">
            <div className="detail-image-container">
              <img src={car?.image}></img>
            </div>
            <div className="detail-description-container">
              <h1>{car?.name}</h1>
              <div className="detail-category">
                <img src={userLogo}></img>
                <p>{car?.category}</p>
              </div>
              <div className="detail-price-total">
                <h1>Total</h1>
                <h1>{formatRupiah(car?.price)}</h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Tidak ada Mobil</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetail;
