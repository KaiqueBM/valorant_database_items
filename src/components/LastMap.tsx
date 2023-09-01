import { useEffect, useState } from "react";
import api from "../axios/config";
import { Link } from "react-router-dom";

import { IMap } from "../@Types/IMap";

const LastMap = () => {
  const [mapaAtual, setMapaAtual] = useState<IMap | null>(null);

  const getMapaAtual = async () => {
    try {
      const response = await api.get(
        "/maps/92584fbe-486a-b1b2-9faa-39b0f486b498?language=pt-BR"
      );
      const data = response.data;
      console.log(data.data);
      setMapaAtual(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMapaAtual();
  }, []);

  return (
    <div className="py-16">
      {mapaAtual && (
        <>
          <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava">
            CONHEÇA SUNSET
          </div>

          <div className="grid lg:grid-cols-2 items-center">
            <div className="mx-auto p-10">
              <img className="rounded-lg" src={mapaAtual.displayIcon} />
            </div>

            <div className="md:text-2xl text-xl text-center lg:py-10 px-10 text-vava font-fira">
              <p>
                Sunset é um dos mapas mais tradicionais do VALORANT, com dois
                locais e três faixas. Sua única característica adicional é uma
                porta mecânica encontrada entre o B Market e o Mid Courtyard. Os
                jogadores podem usar um interruptor no lado do mercado da porta
                para fechá-lo ou abri-lo. Esta porta é impenetrável enquanto
                fechada, mas tem 500 HP, permitindo que os jogadores danifiquem
                e acabem destruindo-o. Uma vez destruída, a porta permanece
                permanentemente aberta pelo resto da rodada.
              </p>
              <hr className="mt-5"></hr>
              <img className="mx-auto mt-8 rounded-lg" src={mapaAtual.splash} />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center pb-12 mt-20">
            <Link to={`/mapas`}>
              <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:text-white hover:bg-verm transition hover:scale-105">
                VER MAIS MAPAS
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LastMap;
