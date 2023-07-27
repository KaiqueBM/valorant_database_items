import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import api from '../axios/config';
import { IAgente } from '../@Types/IAgente';

const AgenteInfo = () => {
	const { uuid } = useParams();
	const [agenteAtual, setAgenteAtual] = useState<IAgente | null>(null);;

  const getAgenteAtual = async () => {
    try {
      const response = await api.get("/agents?language=pt-BR");
      const data = response.data;
      const data_filter = data.data.filter(filter_agent);
      setAgenteAtual(data_filter[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenteAtual();
  }, []);

  function filter_agent(props: IAgente) {
    if (props.uuid === uuid) {
      return props;
    }
  }



  return (
	<>
	{agenteAtual && (
	
	<div style={{'backgroundImage': 'linear-gradient(to top right, #'+agenteAtual.backgroundGradientColors[0].substring(0,6)+' ,#'+agenteAtual.backgroundGradientColors[1].substring(0,6)+' ,#'+agenteAtual.backgroundGradientColors[2].substring(0,6)}} className="pt-16" >
      <div className='flex lg:justify-start justify-center'>
        <img className='web absolute opacity-20 -mt-20' width="50%" src={agenteAtual.background} />
        <img className='mobile absolute opacity-20 -mt-20' width="100%" src={agenteAtual.background} />
      </div>


      <div className="flex md:flex-row flex-col flex-wrap justify-center">
        <div className="lg:w-1/2">
          
            <div className="" key={agenteAtual.uuid}>
              <div className="relative">
                <img
                  className="transition hover:scale-105"
                  src={agenteAtual.bustPortrait}
                />
              </div>
            </div>
        </div>
        <div className="lg:w-1/2 text-vava font-fira z-10 p-5">
              <div className="md:text-9xl text-4xl uppercase font-bold pt-10 flex justify-between">
              <span className='border-b-4 rounded-b font-raj transition hover:scale-105'>{agenteAtual.displayName}</span>
              </div>
              <div className="md:text-6xl text-4xl uppercase font-semibold pt-10 flex justify-between">
                {agenteAtual.role.displayName}
                <img className="md:h-14 h-10 transition hover:scale-105" src={agenteAtual.role.displayIcon} />
              </div>
              
              <div className="md:text-2xl text-xl text-justify pt-10 pb-10">
                {agenteAtual.description}
              </div>

              <div className="flex sm:flex-col flex-col w-full sm:justify-between justify-center">
                {agenteAtual.abilities.map((abilidades, index) => (
                  <div className="m-2 rounded-lg py-2 px-2 transition hover:scale-105" style={{'backgroundColor': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}} key={index}>
                    <div className='flex sm:flex-row flex-col items-center'>
                      <div className='w-1/6'><img className="mx-auto w-20 my-4 sm:my-0" src={abilidades.displayIcon} /></div>
                      <div className='flex flex-col sm:w-5/6 sm:pr-5 px-2 sm:px-0'>
                        <div className="flex flex-row justify-between">
                          
                          <span className='sm:text-3xl text-2xl uppercase font-semibold'>{abilidades.displayName}</span>
                          {abilidades.slot === "Ability1" && (<span className='text-right sm:text-2xl text-xl font-bold bg-vava py-1 px-2 rounded-lg' style={{'color': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}}>Q</span>)}
                          {abilidades.slot === "Ability2" && (<span className='text-right sm:text-2xl text-xl font-bold bg-vava py-1 px-2 rounded-lg' style={{'color': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}}>E</span>)}
                          {abilidades.slot === "Grenade" && (<span className='text-right sm:text-2xl text-xl font-bold bg-vava py-1 px-2 rounded-lg' style={{'color': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}}>C</span>)}
                          {abilidades.slot === "Ultimate" && (<span className='text-right sm:text-2xl text-xl font-bold bg-vava py-1 px-2 rounded-lg' style={{'color': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}}>ULT | X</span>)}
                          {abilidades.slot === "Passive" && (<span className='text-right sm:text-2xl text-xl font-bold bg-vava py-1 px-2 rounded-lg' style={{'color': '#'+agenteAtual.backgroundGradientColors[1].substring(0,6)}}>PASSIVA</span>)}
                          </div>
                        <div className='text-justify text-lg'>{abilidades.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-center pb-28 lg:mt-0 mt-18">
              <Link to={`/agentes`}>
          <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:text-white hover:bg-verm transition hover:scale-105 text-black mt-20">
            OUTROS AGENTES
          </button>
          </Link>
        </div>
        </div>
      </div>
      
    </div>
	)}
	</>
  )
}

export default AgenteInfo