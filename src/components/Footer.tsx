import React, { useEffect, useState } from 'react'
import api from '../axios/config';
import dayjs from 'dayjs'

const Footer = () => {

	const [versionAtual, setVersionAtual] = useState([]);
	const [seasons, setSeasons] = useState([]);

  const getVersionAtual = async () => {
    try {
      const response = await api.get(
        "/version?language=pt-BR"
      );
	  const responseSeason = await api.get("/seasons?language=pt-BR")
      const data = response.data;
	  const dataSeason = responseSeason.data
	  const data_filter = dataSeason.data.filter(filter_seasons);
	  console.log(data_filter)
      setVersionAtual(data.data);
	  setSeasons(data_filter)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVersionAtual();
  }, []);

  function filter_seasons(season: any) {
    if ((season.displayName === "EPISÓDIO 5") || (season.uuid === "34093c29-4306-43de-452f-3f944bde22be")) {
      return season;
    }
  }
	

  return (
	<div className="pt-16">
		{versionAtual.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <>
		<div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava">
            INFORMAÇÕES
          </div>

		  <div className='flex flex-col p-10 justify-center text-center font-fira md:text-2xl text-xl'>
			<p className='font-bold md:text-4xl text-3xl'>{seasons[0].displayName} | {seasons[1].displayName}</p>
			<p><strong>Começou:</strong> {dayjs(seasons[1].startTime).format('DD/MM/YYYY')} </p>
			<p className='mb-10'><strong>Termina:</strong> {dayjs(seasons[1].endTime).format('DD/MM/YYYY')} </p>
			<p><strong>Versão atual:</strong> {versionAtual.version}</p>
			<p><strong>Data da build:</strong> {dayjs(versionAtual.buildDate).format('DD/MM/YYYY')}</p>
			<p><strong>Versão da engine:</strong> {versionAtual.engineVersion}</p>
		  </div>

		  <div className="flex md:flex-row flex-col flex-wrap justify-center mt-10 pb-14">
		  <button className="bg-verm px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5">
            SITE OFICIAL DO VALORANT
          </button>
          <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5 my-5">
            REPOSITÓRIO
          </button>
		  <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg mx-5 my-5">
            GITHUB
          </button>
        </div>
		</>
		)}
		
	</div>
  )
}

export default Footer