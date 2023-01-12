import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container-fluid">
            <div className="title text-center m-5">CHAVEIROS</div>
            <div className="row d-flex justify-content-center">
                {chaveiros.length === 0 ? (<p>Carregando...</p>) : (
                    chaveiros.map((bundle: { uuid: string, displayName: string, displayIcon: string }) => (
                        <div className="col-lg-2 col-12 m-2 chaveiros" key={bundle.uuid}>
                            <img  height="250px" className="w-100" src={bundle.displayIcon} />
                            <p className="text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Chaveiros;