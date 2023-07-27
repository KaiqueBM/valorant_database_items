import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";


const Mapas = () => {

    const [mapas, setNapas] = useState([])

    const getNapas = async () => {
        try {
            const response = await api.get("/maps?language=pt-BR");
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
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">MAPAS</div>
            <div className="flex flex-row flex-wrap justify-center w-full ">
                {mapas.length === 0 ? (<p>Carregando...</p>) : (
                    mapas.map((mapa: { uuid: string, displayName: string, splash: string, coordinates: string }) => (
                        
                        <div className="m-5 bg-vava border-b-4 border-verm rounded-xl sm:w-5/12 w-5/6 transition hover:-translate-y-3 duration-500 cursor-pointer" key={mapa.uuid}>
                           <Link to={`/mapas/${mapa.displayName}`} >
                            <img className="rounded-t-lg" src={mapa.splash} />
                            <p className="text-center pb-2 pt-2 text-verm font-fira"><span className="lg:text-4xl text-2xl uppercase font-bold">{mapa.displayName}</span> <span className="text-center md:text-xl text-base mb-3"> - {mapa.coordinates}</span></p>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Mapas;