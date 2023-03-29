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

const Home = () => {

  function filter_weapon(props: any) {
    if (props.themeUuid === "a547897d-4bd4-7c77-f5e6-55973f0e89ef") {
      return props;
    }
  }

  return (
    <>
      <div className="home relative">
        <video preload="true" loop muted autoPlay className="w-full">
          <source
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute lg:bottom-1/2 bottom-10 w-full text-center">
          <span className="text-vava font-raj font-bold md:text-9xl text-7xl block">
            VALORANT
          </span>
          <span className="text-vava font-fira md:text-3xl text-2xl">DATABASE</span>
        </div>
      </div>

      <LastBundle />

      <LastAgent />

      <LastMap />

      <Rank />

      <Footer />
    </>
  );
};

export default Home;
