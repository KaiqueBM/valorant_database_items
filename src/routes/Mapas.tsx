import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../styles/pages.css'

const Mapas = () => {

    const [mapas, setNapas] = useState([])

    const getNapas = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/maps")
            const data = response.data;
            console.log(data.data)
            setNapas(data.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNapas();
    }, [])



    return (
        <div className="">
            <div className="title text-center m-5">MAPAS</div>
            <div className="flex flex-row flex-wrap justify-center w-full">
                {mapas.length === 0 ? (<p>Carregando...</p>) : (
                    mapas.map((mapa: { uuid: string, displayName: string, splash: string, coordinates: string }) => (
                        <div className="m-5 mapas  w-5/12" key={mapa.uuid}>
                            <img className="" src={mapa.splash} />
                            <p className="text-center pb-2 pt-2">{mapa.displayName} <span className="text-center mb-3"> - {mapa.coordinates}</span></p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Mapas;