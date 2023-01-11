import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/sprays.css'

const Mapas = () => {

    const [mapas, setNapas] = useState([])

    const getNapas = async () => {
        try {
            const response = await axios.get("http://localhost:3000/maps")
            const data = response.data;
            console.log(data)
            setNapas(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNapas();
    }, [])



    return (
        <div className="container-fluid">
            <div className="title text-center m-5">MAPAS</div>
            <div className="row d-flex justify-content-center">
                {mapas.length === 0 ? (<p>Carregando...</p>) : (
                    mapas.map((mapa: { uuid: string, displayName: string, splash: string, coordinates: string }) => (
                        <div className="col-5 m-2 mapas" key={mapa.uuid}>
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