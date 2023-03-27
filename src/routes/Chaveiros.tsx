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
            <div className="title text-center m-5">CHAVEIROS</div>
            <div className="flex flex-row flex-wrap justify-center w-full">
                {chaveiros.length === 0 ? (<p>Carregando...</p>) : (
                    chaveiros.map((bundle: { uuid: string, displayName: string, displayIcon: string }) => (
                        <div className="m-5 chaveiros  w-2/12" key={bundle.uuid}>
                            <img className="w-full h-60 p-5" src={bundle.displayIcon} />
                            <p className="text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Chaveiros;