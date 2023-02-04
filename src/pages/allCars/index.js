import Navbar from "../../components/Navbar";
import BannerDetail from "../../components/BannerDetail";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import SearchToolbar from "../../components/SearchToolbar";
import { useState, useEffect } from "react";
import axios from "axios";

const AllCars = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [fdata, setFData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
  
    const getData = () => {
      axios
      .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", { 
        headers: {
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTQ3OTMwOX0.w3e2uTprpLrsHmmKkYvloJA_gtCbnyVd0EmOsCa-YAA"
        } 
      }) //get API
      .then((res) => {
        console.log("hasil ", res);
         setData(res.data.cars)
        }) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
    } 
    console.log(data)

    const handleChangeName = (e) => {
      setName(e.target.value);
      if (e.target.value.length === 0) {
        setFData([]);
        setNotFound(false);
      }
    };
    const handleChangeCategory = (e) => {
      setCategory(e.target.value);
    };
  
    const handleChangePrice = (e) => {
      setPrice(e.target.value);
    };
  
    const handleChangeStatus = (e) => {
      setStatus(e.target.value);
    };
  
    const handleSearch = () => {
      const newArray = data.filter((item) => item.name === name);
      if (!newArray.length) {
        setNotFound(true);
      }
      setFData(newArray);
    };
    const handleCategory = () => {
      const newArray = data.filter((item) => item.category == category);
      if (!newArray.length) {
        setNotFound(true);
      }
      setFData(newArray);
    };
    const handlePrice = () => {
      const newArray = data.filter((item) => item.price == price);
      if (!newArray.length) {
        setNotFound(true);
      }
      setFData(newArray);
    };
  
    const handleStatus = () => {
      const newArray = data.filter((item) => item.status == status);
      if (!newArray.length) {
        setNotFound(true);
      }
      setFData(newArray);
    };
  
    const combineHandle = () => {
      if (name) handleSearch();
      if (category) handleCategory();
      if (price) handlePrice();
      if (status) handleStatus();
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    console.log(data);
    const props = {
      data,
      name,
      handleChangeName,
      handleSearch,
      handleChangeCategory,
      handleCategory,
      handlePrice,
      handleChangePrice,
      combineHandle,
      handleChangeStatus,
    };
  
    console.log(category);
    return (
      <div>
        <Navbar />
        <BannerDetail />
        <SearchToolbar {...props} />
        {!!notFound && <h1>Mobil Tidak Ditemukan</h1>}
        <CarList data={!fdata.length ? data : fdata} />
        <Footer />
      </div>
    );
  };
  
  export default AllCars;