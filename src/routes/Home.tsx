import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";
import "../styles/home.css";

const Home = () => {
  const [bundleAtual, setBundleAtual] = useState([]);
  const [weaponAtual, setWeaponAtual] = useState([]);

  const getBundleAtual = async () => {
    try {
      const response = await api.get(
        "/bundles/b7d754d4-44aa-4663-afc3-84a5cccc3c9d?language=pt-BR"
      );
      const response1 = await api.get("/weapons/skins?language=pt-BR");
      const data = response.data;
      const data1 = response1.data;
      const data_filter = data1.data.filter(filter_weapon);
      console.log(data_filter);
      console.log(data.data);
      setBundleAtual(data.data);
      setWeaponAtual(data_filter);
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

      <div className="bg-vava">
        <div className="text-center pt-5 font-raj font-bold text-7xl">
          BUNDLE ATUAL DA LOJA
        </div>
        <div className="flex flex-row justify-center"></div>

        <div className="flex flex-col p-4">
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
          <div className="mx-auto mt-2"><button className="bg-verm px-10 py-4 font-raj font-semibold text-2xl rounded-lg">VER OUTROS BUNDLES</button></div>
        </div>
      </div>

    <div>
        <div className="text-center pt-5 font-raj font-bold text-7xl text-vava">
          ÚLTIMO AGENTE LANÇADO
        </div>
    </div>


    </>
  );
};

export default Home;
