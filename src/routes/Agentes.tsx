import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";

import "../styles/pages.css";

const Agentes = () => {
  const [agentesHero, setAgentesHero] = useState<any>([]);

  const getAgentesHero = async () => {
    try {
      const response = await api.get("/agents?language=pt-BR");
      const data = response.data;
      console.log(data.data);
      const data_filter = data.data.filter(filter_imgs);
      setAgentesHero(data_filter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgentesHero();
  }, []);

  function filter_imgs(props: any) {
    if (props.background != null) {
      return props;
    }
  }

  return (
    <div className="">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">AGENTES</div>
      <div className="flex flex-row flex-wrap justify-center">
        {agentesHero.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          agentesHero.map((agent:any) => (
            <div className="lg:w-3/12 sm:w-6/12" key={agent.uuid}>
              <Link to={`/agentes/${agent.uuid}`}>
              <img
                src={agent.background}
                width="80%"
                className="mx-auto opacity-90"
              />
              <div className="relative">
                <img
                  className="absolute bottom-10"
                  src={agent.bustPortrait}
                />
                <p className="text-center md:text-4xl text-2xl font-semibold">{agent.displayName}</p>
              </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Agentes;
