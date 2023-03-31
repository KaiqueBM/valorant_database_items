import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../styles/pages.css'

const Chaveiros = () => {

    const [chaveiros, setChaveiros] = useState([])

    const getChaveiros = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/buddies")
            const data = response.data;
            console.log(data)
            setChaveiros(data.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getChaveiros();
    }, [])



    return (
        <div className="">
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">CHAVEIROS</div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center w-full">
                {chaveiros.length === 0 ? (<p>Carregando...</p>) : (
                    chaveiros.map((bundle: { uuid: string, displayName: string, displayIcon: string }) => (
                        <div className="m-5 bg-slate-100 rounded-xl" key={bundle.uuid}>
                            <img className=" bg-slate-100 rounded-t-xl h-60 p-5 mx-auto" src={bundle.displayIcon} />
                            <p className="py-1 px-1 bg-vava text-verm font-fira font-medium border-b-4 rounded-b-xl border-verm text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Chaveiros;