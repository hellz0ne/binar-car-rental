import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarDetail from "../../components/CarDetail";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchToolbar from "../../components/SearchToolbar";

import { include, exclude, refund } from "../../components/Static/staticData";
import BannerDetail from "../../components/BannerDetail";

const DetailCar = () => {
  const [car, setCar] = useState({});

  const param = useParams();
  const id = param.id;
  console.log(car);
  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  const props = { car, include, exclude, refund, formatRupiah };

  return (
    <div>
      <Navbar />
      <BannerDetail />

      <SearchToolbar />
      <CarDetail {...props} />
      <Footer />
    </div>
  );
};

export default DetailCar;
