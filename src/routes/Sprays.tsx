import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/sprays.css'

const Sprays = () => {

    const [sprays, setSprays] = useState([])

    const getSprays = async () => {
        try {
            const response = await axios.get("http://localhost:3000/sprays")
            const data = response.data;
            console.log(data)
            const data_filter = data.filter(filter_imgs);
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
            <div className="title text-center m-5">SPRAYS</div>
            <div className="row d-flex justify-content-center">
                {sprays.length === 0 ? (<p>Carregando...</p>) : (
                    sprays.map((sprays: { uuid: string, displayName: string, fullTransparentIcon: string }) => (
                        <div className="col-lg-2 col-12 m-2 sprays" key={sprays.uuid}>
                            <img className="" src={sprays.fullTransparentIcon} />
                            <p className="text-center">{sprays.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Sprays;