import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutHospital from "./components/AboutHospital";
import Services from "./components/Services";
import OurDoctors from "./components/OurDoctors";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import Help from "./components/Help";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <HeroSection />
      <AboutHospital />
      <Services />
      <OurDoctors />
      <Testimonial />
      <ContactUs />
      <Help />
      {/* <Blogs /> */}
      {/* <Newsletter /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
