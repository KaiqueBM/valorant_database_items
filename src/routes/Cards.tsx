import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">CARDS</div>
            <div className="flex flex-row flex-wrap justify-center w-full">
                {cards.length === 0 ? (<p>Carregando...</p>) : (
                    cards.map((bundle: { uuid: string, displayName: string, largeArt: string }) => (
                        <div className="m-5 cards w-2/12" key={bundle.uuid}>
                            <img className="w-full" src={bundle.largeArt} />
                            <p className="text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Cards;