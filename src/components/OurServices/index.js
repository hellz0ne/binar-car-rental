import "./ourservices.css";
import imgService from "./../../asset/img_service.png";
import logoCheck from "./../../asset/done.png";
const OurServices = (props) => {
  const { strList } = props;
  return (
    <div id="ourservices" className="services-container">
      <img width={"460px"} src={imgService} alt="" />

      <div className="services-desciption">
        <h1 className="desc-title">Best Car Rental for any kind of trip in Bekasi.</h1>
        <h1 className="desc-par">
          Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
        </h1>
        <ul className="service-list">
          {strList.map((item, key) => (
            <li key={key}>
              <img src={logoCheck}></img>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
