import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios/config";

import { IMap } from "../@Types/IMap";

const MapasInfo = () => {
  const { displayName } = useParams();
  const [mapaAtual, setMapaAtual] = useState<IMap | null>(null);

  const getMapaAtual = async () => {
    try {
      const response = await api.get("/maps?language=pt-BR");
      const data = response.data;
      const data_filter = data.data.filter(filter_map);
      console.log(data_filter[0]);
      setMapaAtual(data_filter[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMapaAtual();
  }, []);

  function filter_map(props: IMap) {
    if (props.displayName === displayName) {
      return props;
    }
  }
  return (
    <div className="py-16">
      {mapaAtual && (
        <>
          <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava uppercase">
            MAPA {mapaAtual.displayName}
          </div>

          <div className="grid lg:grid-cols-2 items-center">
            <div className="mx-auto p-10">
              <p className="md:text-2xl text-xl text-center lg:py-2 px-10 text-vava font-fira uppercase">
                Minimapa
              </p>
              <img className="rounded-lg" src={mapaAtual.displayIcon} />
            </div>

            <div className="md:text-2xl text-xl text-center lg:py-10 px-10 text-vava font-fira">
              <p className="md:text-2xl text-xl text-center lg:py-2 px-10 text-vava font-fira uppercase">
                Icone do mapa
              </p>
              <img
                className="mx-auto rounded-lg w-full mb-5"
                src={mapaAtual.listViewIcon}
              />
              <p className="md:text-2xl text-xl text-center lg:py-2 px-10 text-vava font-fira uppercase">
                Imagem do mapa
              </p>
              <img className="mx-auto rounded-lg" src={mapaAtual.splash} />
            </div>
          </div>

          <div className="p-5 bg-vava container xl:rounded-xl">
            <p className="text-verm font-fira text-5xl font-semibold xl:mb-2 mb-10 mx-2 pb-5 text-center uppercase">
              LOCAIS DO MAPA
            </p>
            {mapaAtual.callouts.map((callouts, index) => (
              <div key={index}>
                <p className="text-center text-black font-fira text-xl font-semibold mt-2">
                  <strong>{callouts.regionName}</strong> localizado{" "}
                  <strong>[{callouts.superRegionName}]</strong>
                </p>
              </div>
            ))}
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

export default MapasInfo;
