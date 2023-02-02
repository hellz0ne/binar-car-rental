import "./whyus.css";

const WhyUs = (props) => {
  const { whyUs } = props;
  return (
    <div id="whyus" className="container-whyus">
      <div className="tittle-whyus">
        <h1>Why Us?</h1>
        <h2>Mengapa harus pilih Binar Car Rental?</h2>
      </div>
      <div className="cardlist-whyus">
        {whyUs.map((item, key) => (
          <div className="card-content-whyus" key={key}>
            <img src={item.icon}></img>
            <h4>{item.title}</h4>
            <h5>{item.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyUs;
