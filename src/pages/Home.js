import React from "react";
import Footer from "../components/Footer";
import GridExample from "../components/GridExample";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />

      <div className="pt-10">
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
        <div>Palais</div>
      </div>
      <GridExample />

      <Footer />
    </>
  );
};

export default Home;
