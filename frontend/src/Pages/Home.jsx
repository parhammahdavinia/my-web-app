// src/pages/Home.jsx
import Footer from "../components/Footer";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="vazir  ">
      <HomeSection1 />

      <HomeSection2 />
      <HomeSection3 />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
