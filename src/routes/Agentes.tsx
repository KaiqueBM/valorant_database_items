import { useState, useEffect } from "react";
import api from "../axios/config";

import "../styles/pages.css";

const Agentes = () => {
  const [agentesHero, setAgentesHero] = useState([]);

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
      <div className="title text-center m-5">AGENTES</div>
      <div className="flex flex-row flex-wrap justify-center">
        {agentesHero.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          agentesHero.map((agent) => (
            <div className="w-3/12" key={agent.uuid}>
              <img
                src={agent.background}
                width="80%"
                className="mx-auto opacity-90"
              />
              <div className="relative">
                <img
                  className="web absolute bottom-10"
                  src={agent.bustPortrait}
                />
                <p className="text-center">{agent.displayName}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Agentes;
