import React, { useEffect, useState } from "react";
import api from "../axios/config";

const LastAgent = () => {
  const [agenteAtual, setAgenteAtual] = useState([]);

  const getAgenteAtual = async () => {
    try {
      const response = await api.get(
        "/agents/e370fa57-4757-3604-3648-499e1f642d3f?language=pt-BR"
      );
      const data = response.data;
      setAgenteAtual(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenteAtual();
  }, []);

  return (
    <div className=" bg-purple-500 pt-16">
      <div className="text-center font-raj font-bold text-8xl text-vava">
        ÚLTIMO AGENTE LANÇADO
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center m-10">
        <div className="w-1/3">
          {agenteAtual.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            <div className="" key={agenteAtual.uuid}>
              <img
                src={agenteAtual.background}
                width="100%"
                className="mx-auto opacity-90 -mt-28"
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
        <div className="w-1/2 text-vava font-fira">
          {agenteAtual.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            <>
              <div className="text-6xl uppercase font-semibold pt-10 flex justify-between">
                {agenteAtual.displayName}{" "}
                <img className="h-14" src={agenteAtual.role.displayIcon} />
              </div>
              <div className="text-2xl text-justify pt-10">
                {agenteAtual.description}
              </div>

              <div className="flex w-full justify-between">
                {agenteAtual.abilities.map((abilidades, index) => (
                  <div className="pt-10" key={index}>
                    <img src={abilidades.displayIcon} />
                    <div className="text-center">{abilidades.displayName}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LastAgent;
