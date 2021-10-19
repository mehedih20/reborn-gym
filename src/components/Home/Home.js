import React from "react";
import Banner from "./Body/Banner/Banner";
import Gallery from "./Body/Gallery/Gallery";
import HomeServices from "./Body/homeServices/HomeServices";
import Links from "../Common/Links/Links";
import Why from "./Body/Why/Why";

const Home = () => {
  return (
    <div className="bg-light">
      <Banner />
      <Why />
      <HomeServices />
      <Gallery />
      <Links />
    </div>
  );
};

export default Home;
