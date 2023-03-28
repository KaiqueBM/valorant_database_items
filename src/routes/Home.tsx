import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import icon from '../assets/icon.png'
import icon1 from '../assets/largeart.png'
import '../styles/home.css'

const Home = () => {



    return (
        <>
        <div className="home relative">
           <video preload="true" loop muted autoPlay className="w-full">
            <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4" type="video/mp4" />
           </video>
           <div className="absolute bottom-1/2 w-full text-center">
            <span className="text-vava font-raj font-bold text-9xl block">VALORANT</span>
            <span className="text-vava font-fira text-3xl">DATABASE</span>
            </div>
        </div>

        


        </>
    )
};

export default Home;