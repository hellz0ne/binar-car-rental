import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUs from "../../components/WhyUs";
import Testimonial from "../../components/Testimonial";
import { strList, whyUs, testiList, faqList } from "../../components/Static/staticData";

import OurServices from "../../components/OurServices";
import Section from "../../components/Section";
import Faq from "../../components/Faq";

const Home = () => {
  const props = {
    strList,
    whyUs,
    testiList,
    faqList,
  };
  return (
    <div>
      <Navbar />
      <Banner />
      <OurServices {...props} />
      <WhyUs {...props} />
      <Testimonial {...props} />
      <Section />
      <Faq {...props} />
      <Footer />
    </div>
  );
};

export default Home;
