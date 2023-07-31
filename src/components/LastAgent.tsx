import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";

import { IAgente } from "../@Types/IAgente";

const LastAgent = () => {
  const [agenteAtual, setAgenteAtual] = useState<IAgente | null>(null);

  const getAgenteAtual = async () => {
    try {
      const response = await api.get(
        "/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235?language=pt-BR"
      );
      const data = response.data;
      console.log(data.data);
      setAgenteAtual(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenteAtual();
  }, []);

  return (
    <div className=" bg-blue-900 pt-16">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava">
        ÚLTIMO AGENTE LANÇADO
      </div>

      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center m-10">
        <div className="lg:w-1/3 md:w-1/2">
          {agenteAtual && (
            <div className="" key={agenteAtual.uuid}>
              <img
                src={agenteAtual.background}
                width="100%"
                className="mx-auto opacity-90 -mt-24"
              />
              <div className="relative">
                <img
                  className="absolute bottom-20"
                  src={agenteAtual.bustPortrait}
                />
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 text-vava font-fira">
          {agenteAtual && (
            <>
              <div className="md:text-6xl text-4xl uppercase font-semibold pt-10 flex justify-between">
                {agenteAtual.displayName}{" "}
                <img
                  className="md:h-14 h-10"
                  src={agenteAtual.role.displayIcon}
                />
              </div>
              <div className="md:text-2xl text-xl text-justify pt-10">
                {agenteAtual.description}
              </div>

              <div className="flex sm:flex-row flex-col w-full sm:justify-between justify-center">
                {agenteAtual.abilities.map((abilidades: any, index: any) => (
                  <div className="pt-10" key={index}>
                    <img className="mx-auto" src={abilidades.displayIcon} />
                    <div className="text-center">{abilidades.displayName}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center pb-28 lg:mt-0 mt-24">
        <Link to={`/agentes/`}>
          <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg text-black hover:text-white hover:bg-verm transition hover:scale-105">
            VER MAIS AGENTES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LastAgent;
