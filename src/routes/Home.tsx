import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";
import Footer from "../components/Footer";
import LastAgent from "../components/LastAgent";
import LastBundle from "../components/LastBundle";
import LastMap from "../components/LastMap";
import Rank from "../components/Rank";
import "../styles/home.css";
import wallpaper from "../assets/wall3.png";

const Home = () => {

  function filter_weapon(props: any) {
    if (props.themeUuid === "a547897d-4bd4-7c77-f5e6-55973f0e89ef") {
      return props;
    }
  }

  return (
    <>
      <div className="home relative">
        <img src={wallpaper} className="" />
        <div className="absolute lg:bottom-1/3 sm:bottom-10 bottom-6 w-full text-right container hover:scale-125 transition hover:-translate-x-28">
          <span className="text-vava font-raj font-bold md:text-9xl sm:text-7xl text-6xl block">
            VALORANT
          </span>
          <span className="text-vava font-fira md:text-3xl text-2xl">DATABASE</span>
        </div>
      </div>

      <LastBundle />

      <LastAgent />

      <LastMap />

      <Footer />
    </>
  );
};

export default Home;
