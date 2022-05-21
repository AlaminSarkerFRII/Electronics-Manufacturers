import React from "react";
import Footer from "../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BodyBanner from "../BodyBanner/BodyBanner";
import Card from "../Card/Card";
import GetInTOuch from "../GetInTOuch/GetInTOuch";
import Service from "../Services/Service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Service />
      <BodyBanner />
      <GetInTOuch />
      <Footer />
    </>
  );
};

export default Home;
