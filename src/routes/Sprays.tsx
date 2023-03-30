import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../styles/pages.css'

const Sprays = () => {

    const [sprays, setSprays] = useState([])

    const getSprays = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/sprays")
            const data = response.data;
            console.log(data.data)
            const data_filter = data.data.filter(filter_imgs);
            setSprays(data_filter)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSprays();
    }, [])

    function filter_imgs(props: any) {
        if (props.fullTransparentIcon != null) {
            if (props.animationPng != null) {
                props.fullTransparentIcon = props.animationPng
            }
            return props
        }
    }

    return (
        <div className="container-fluid">
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">SPRAYS</div>
            <div className="flex flex-row flex-wrap justify-center w-full">
                {sprays.length === 0 ? (<p>Carregando...</p>) : (
                    sprays.map((sprays: { uuid: string, displayName: string, fullTransparentIcon: string }) => (
                        <div className="m-5 sprays" key={sprays.uuid}>
                            <img width="350px" height="350px" className="" src={sprays.fullTransparentIcon} />
                            <p className="text-center">{sprays.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Sprays;