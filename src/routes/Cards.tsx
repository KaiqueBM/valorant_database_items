import { useState, useEffect } from "react";
import axios from "axios";

import '../styles/pages.css'
import { ICards } from "../@Types/ICards";

const Cards = () => {

    const [cards, setCards] = useState<ICards[] | null>(null)

    const getCards = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/playercards?language=pt-BR")
            const data = response.data;
            setCards(data.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCards();
    }, [])



    return (
        <div className="lg:mx-8 mx-0">
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">CARDS</div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center w-full">
                {cards && (
                    cards.map((bundle) => (
                        <div className="m-5 transition duration-500 hover:-translate-y-3 cursor-pointer" key={bundle.uuid}>
                            <img className="rounded-t-xl" src={bundle.largeArt} />
                            <p className="py-1 px-1 bg-vava text-verm font-fira font-medium border-b-4 rounded-b-xl border-verm text-center">{bundle.displayName}</p>

                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Cards;