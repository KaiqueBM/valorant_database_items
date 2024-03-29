import { useEffect, useState } from "react";
import api from "../axios/config";
import wallpaper from "../assets/wall2.png";
import dayjs from "dayjs";

import { ISeason, IVersion } from "../@Types/ISeasons";

const Footer = () => {
  const [versionAtual, setVersionAtual] = useState<IVersion | null>(null);
  const [seasons, setSeasons] = useState<ISeason[]>([]);

  const getVersionAtual = async () => {
    try {
      const response = await api.get("/version?language=pt-BR");
      const responseSeason = await api.get("/seasons?language=pt-BR");
      const data = response.data;
      const dataSeason = responseSeason.data;
      const data_filter = dataSeason.data.filter(filter_seasons);
      //console.log(dataSeason)
      setVersionAtual(data.data);
      setSeasons(data_filter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVersionAtual();
  }, []);

  function filter_seasons(season: ISeason) {
    if (
      season.displayName === "EPISÓDIO 6" ||
      season.uuid === "0981a882-4e7d-371a-70c4-c3b4f46c504a"
    ) {
      return season;
    }
  }

  return (
    <div
      className="pt-16 bg-vava border-verm border-t-4"
      style={{ backgroundImage: "url(" + wallpaper + ")" }}
    >
      {versionAtual && (
        <>
          <div className="text-center font-raj font-bold md:text-8xl text-6xl text-verm">
            INFORMAÇÕES
          </div>

          <div className="flex flex-col p-10 justify-center text-center font-fira md:text-2xl text-xl">
            <p className="font-bold md:text-4xl text-3xl text-zinc-900">
              {seasons[0].displayName} | {seasons[1].displayName}
            </p>
            <p className="text-zinc-600 pt-10">
              <strong>Começou:</strong>{" "}
              {dayjs(seasons[1].startTime).format("DD/MM/YYYY")}{" "}
            </p>
            <p className="mb-10 text-zinc-600">
              <strong>Termina:</strong>{" "}
              {dayjs(seasons[1].endTime).format("DD/MM/YYYY")}{" "}
            </p>
            <p className="text-zinc-600">
              <strong>Versão atual:</strong> {versionAtual.version}
            </p>
            <p className="text-zinc-600">
              <strong>Data da build:</strong>{" "}
              {dayjs(versionAtual.buildDate).format("DD/MM/YYYY")}
            </p>
            <p className="text-zinc-600">
              <strong>Versão da engine:</strong> {versionAtual.engineVersion}
            </p>
          </div>

          <div className="flex md:flex-row flex-col flex-wrap justify-center mt-10 pb-14 items-center">
            <a href="https://playvalorant.com/pt-br/">
              <button className="bg-gray-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5 text-white hover:bg-verm transition hover:scale-105">
                SITE OFICIAL DO VALORANT
              </button>
            </a>
            <a href="https://github.com/KaiqueBM/valorant_database_items">
              <button className=" bg-gray-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5 text-white hover:bg-verm transition hover:scale-105">
                REPOSITÓRIO
              </button>
            </a>
            <a href="https://github.com/KaiqueBM">
              <button className="bg-gray-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5 text-white hover:bg-verm transition hover:scale-105">
                GITHUB
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
