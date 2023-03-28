import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";
import "../styles/home.css";

const Home = () => {
  const [bundleAtual, setBundleAtual] = useState([]);
  const [weaponAtual, setWeaponAtual] = useState([]);
  const [agenteAtual, setAgenteAtual] = useState([]);

  const getBundleAtual = async () => {
    try {
      const response = await api.get(
        "/bundles/b7d754d4-44aa-4663-afc3-84a5cccc3c9d?language=pt-BR"
      );
      const response1 = await api.get("/weapons/skins?language=pt-BR");
      const response2 = await api.get("/agents/e370fa57-4757-3604-3648-499e1f642d3f?language=pt-BR");
      const data = response.data;
      const data1 = response1.data;
      const data2 = response2.data
      const data_filter = data1.data.filter(filter_weapon);
      console.log(data2.data);
      setBundleAtual(data.data);
      setWeaponAtual(data_filter);
      setAgenteAtual(data2.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBundleAtual();
  }, []);

  function filter_weapon(props: any) {
    if (props.themeUuid === "a547897d-4bd4-7c77-f5e6-55973f0e89ef") {
      return props;
    }
  }

  return (
    <>
      <div className="home relative">
        <video preload="true" loop muted autoPlay className="w-full">
          <source
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-1/2 w-full text-center">
          <span className="text-vava font-raj font-bold text-9xl block">
            VALORANT
          </span>
          <span className="text-vava font-fira text-3xl">DATABASE</span>
        </div>
      </div>

      <div className="bg-vava py-16">
        <div className="text-center font-raj font-bold text-8xl">
          BUNDLE ATUAL DA LOJA
        </div>
        <div className="flex flex-row justify-center"></div>

        <div className="flex flex-col py-12">
          <div className="flex flex-row items-end justify-center border-4 h-full">
            {weaponAtual.length === 0 ? (
              <p>Carregando...</p>
            ) : (
              weaponAtual.map((weapon) => (
                <div className="p-5" key={weapon.uuid}>
                  <img className="h-20" src={weapon.displayIcon} />
                  <p className="text-center text-black font-fira text-xl">
                    {weapon.displayName}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="mx-auto mt-2 pt-12"><button className="bg-verm px-10 py-4 font-raj font-semibold text-2xl rounded-lg">VER OUTROS BUNDLES</button></div>
        </div>
      </div>

    <div className=" bg-purple-500 pt-16">
        <div className="text-center font-raj font-bold text-8xl text-vava">
          ÚLTIMO AGENTE LANÇADO
        </div>


        <div className="flex flex-row flex-wrap justify-center items-center m-10">
                <div className="w-1/3">
                {agenteAtual.length === 0 ? (<p>Carregando...</p>) : (
                        <div className="" key={agenteAtual.uuid}>
							<img src={agenteAtual.background} width="100%" className="mx-auto opacity-90 -mt-28"  />
							<div className="relative"> 
                            <img className="absolute bottom-20" src={agenteAtual.bustPortrait} />
							</div>
                            
                        </div>
                )}
                </div>
                <div className="w-1/2 text-vava font-fira">
                    {agenteAtual.length === 0 ? (<p>Carregando...</p>) : (
                        <>
                    <div className="text-6xl uppercase font-semibold pt-10 flex justify-between">{agenteAtual.displayName} <img className="h-14" src={agenteAtual.role.displayIcon} /></div>
                    <div className="text-2xl text-justify pt-10">{agenteAtual.description}</div>
                    
                    <div className="flex w-full justify-between">
                    {agenteAtual.abilities.map((abilidades)=>(
                        <div className="pt-10">
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


    </>
  );
};

export default Home;
