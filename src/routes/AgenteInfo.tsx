import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../axios/config';

const AgenteInfo = () => {
	const { uuid } = useParams();
	const [agenteAtual, setAgenteAtual] = useState<any>([]);

  const getAgenteAtual = async () => {
    try {
      const response = await api.get("/agents?language=pt-BR");
      const data = response.data;
      const data_filter = data.data.filter(filter_agent);
      setAgenteAtual(data_filter[0]);
	  console.log(data_filter[0])
	
	  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenteAtual();
  }, []);

  function filter_agent(props: any) {
    if (props.uuid === uuid) {
      return props;
    }
  }



  return (
	<>
	{agenteAtual.length === 0 ? (
            <p>Carregando...</p>
          ) : (
	
	<div style={{'backgroundColor': '#'+agenteAtual.backgroundGradientColors[3].substring(0,6)}} className="pt-16" >
      <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava">
	  {agenteAtual.displayName}
      </div>


      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center m-10">
        <div className="lg:w-1/3 md:w-1/2">
          
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
        </div>
        <div className="lg:w-1/2 text-vava font-fira">
              <div className="md:text-6xl text-4xl uppercase font-semibold pt-10 flex justify-between">
                {agenteAtual.role.displayName}
                <img className="md:h-14 h-10" src={agenteAtual.role.displayIcon} />
              </div>
              <div className="md:text-2xl text-xl text-justify pt-10">
                {agenteAtual.description}
              </div>

              <div className="flex sm:flex-row flex-col w-full sm:justify-between justify-center">
                {agenteAtual.abilities.map((abilidades: any, index: any) => (
                  <div className="pt-10" key={index}>
                    <img className="mx-auto w-40" src={abilidades.displayIcon} />
                    <div className="text-center">{abilidades.displayName}</div>
                  </div>
                ))}
              </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center pb-28 lg:mt-0 mt-24">
          <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg">
            VER MAIS AGENTES
          </button>
        </div>
    </div>
	)}
	</>
  )
}

export default AgenteInfo