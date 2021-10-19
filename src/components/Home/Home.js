import React from "react";
import Links from "../Common/Links";
import Banner from "./Body/Banner/Banner";
import Gallery from "./Body/Gallery/Gallery";
import HomeServices from "./Body/homeServices/HomeServices";
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
