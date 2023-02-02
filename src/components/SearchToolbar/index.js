import "./style.css";

const SearchToolbar = (props) => {
  const { handleChangeName, handleSearch, handleChangeCategory, handleCategory, handleChangePrice, handlePrice, combineHandle, handleChangeStatus } = props;
  return (
    <div className="tool-container">
      <div className="search-tool">
        <p>Nama Mobil</p>
        <input type="search" placeholder="Ketik nama/tipe mobil" onChange={(e) => handleChangeName(e)} />
      </div>
      <div className="capacity-tool">
        <p>Kategori</p>
        <select disabled name="kapasitas" id="kapasitas" placeholder="Masukan Kapasitas Mobil" onChange={(e) => handleChangeCategory(e)}>
          <option value="" disabled selected style={{ fontColor: "#8A8A8A" }}>
            Masukan Kapasitas Mobil
          </option>
          <option value="2 - 4 orang">2-4 Orang</option>
          <option value="4 - 6 orang">4-6 Orang</option>
          <option value="6 - 8 orang">6-8 Orang</option>
        </select>
      </div>
      <div className="price-tool">
        <p>Harga</p>
        <select disabled name="harga" id="harga" placeholder="Masukan Harga Sewa per Hari" onChange={(e) => handleChangePrice(e)}>
          <option value="" disabled selected style={{ fontColor: "#8A8A8A" }}>
            Masukan Harga Sewa per Hari
          </option>
          <option value="350000">Rp. 350.000 </option>
          <option value="400000">Rp. 400.000 </option>
          <option value="500000">Rp. 500.000</option>
          <option value="1000000">Rp. 1.000.000</option>
          <option value="7000000">Rp. 7.000.000 </option>
        </select>
      </div>
      <div className="status-tool">
        <p>Status</p>
        <select disabled name="status" id="status" placeholder="Disewa" onChange={(e) => handleChangeStatus(e)}>
          <option value="" disabled selected style={{ fontColor: "#8A8A8A" }}>
            Masukan Status
          </option>
          <option value="true">Disewa</option>
          <option value="false">Tersedia</option>
        </select>
      </div>
      <a className="cari-button" onClick={combineHandle}>
        Cari
      </a>
    </div>
  );
};

export default SearchToolbar;
