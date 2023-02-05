import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchToolbar from "../../components/SearchToolbar";
import BannerCar from "../../components/BannerCar";



const SearchBar = () => {
  return (
    <div>
      <Navbar />
      <BannerCar />
      <SearchToolbar />
      <Footer />
    </div>
  );
};
export default SearchBar;