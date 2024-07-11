import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FitnessGoal from "./components/FitnessGoal";
import FitnessGoal1 from "./components/FitnessGoal1";
import BestOffers from "./components/BestOffers";
import Services from "./components/Services";
import BestPlan from "./components/BestPlan";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Testimonial from "./components/Testimonial";

AOS.init();

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FitnessGoal />
      <FitnessGoal1 />
      <BestOffers />
      <Services />
      <BestPlan />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
