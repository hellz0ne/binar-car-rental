import "./footer.css";
import iconFb from "./../../asset/icon_facebook.png";
import iconIg from "./../../asset/icon_instagram.png";
import iconTwt from "./../../asset/icon_twitter.png";
import iconMail from "./../../asset/icon_mail.png";
import iconTwitch from "./../../asset/icon_twitch.png";
import logo from "./../../asset/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
        <h5>binarcarrental@gmail.com</h5>
        <h5>081-233-334-808</h5>
      </div>
      <div className="service-container">
        <a href="#ourservices">Our Services</a>
        <a href="#whyus">Why Us</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="sosmed-container">
        <h1>Connect with us</h1>
        <div className="sosmed-icon">
          <img src={iconFb} />
          <img src={iconIg} />
          <img src={iconTwt} />
          <img src={iconMail} />
          <img src={iconTwitch} />
        </div>
      </div>
      <div className="trademark">
        <h5>&copy; Copyright Binar 2022</h5>
        <div className="trademark-logo">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
