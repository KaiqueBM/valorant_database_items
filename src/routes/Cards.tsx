import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/pages.css'

const Cards = () => {

    const [cards, setCards] = useState([])

    const getCards = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/playercards")
            const data = response.data;
            console.log(data)
            setCards(data.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCards();
    }, [])



    return (
        <div className="container">
            <div className="title text-center m-5">CARDS</div>
            <div className="row d-flex justify-content-center">
                {cards.length === 0 ? (<p>Carregando...</p>) : (
                    cards.map((bundle: { uuid: string, displayName: string, largeArt: string }) => (
                        <div className="col-lg-2 col-5 cards" key={bundle.uuid}>
                            <img src={bundle.largeArt} />
                            <p className="text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Cards;