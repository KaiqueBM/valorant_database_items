import { useEffect, useState } from "react";
import api from "../axios/config";
import { Link } from "react-router-dom";

const LastMap = () => {
  const [mapaAtual, setMapaAtual] = useState<any>([]);

  const getMapaAtual = async () => {
    try {
      const response = await api.get(
        "/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9?language=pt-BR"
      );
      const data = response.data;
      setMapaAtual(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMapaAtual();
  }, []);

  return (
    <div className="py-16">
      {mapaAtual.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <>
          <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava">
            CONHEÇA LOTUS
          </div>

		  
          <div className="grid lg:grid-cols-2 items-center">
			<div className="mx-auto p-10"><img className="rounded-lg" src={mapaAtual.displayIcon} /></div>
			
			<div className="md:text-2xl text-xl text-center lg:py-10 px-10 text-vava font-fira">
				<p>Nas florestas exuberantes da Índia, existe um lugar onde plantas, arquitetura e tecnologia entram em harmonia para amplificar a energia do sol. E não, não estamos falando de um laboratório de energia sustentável, mas de uma ruína ancestral.</p>
				<hr className="mt-5"></hr>
				<img className="mx-auto mt-8 rounded-lg" src={mapaAtual.splash} />
			</div>
		</div>
		<div className="flex flex-row flex-wrap justify-center pb-12 mt-20">
    <Link to={`/mapas`}>
          <button className="bg-vava px-10 py-4 font-raj font-semibold text-2xl rounded-lg">
            VER MAIS MAPAS
          </button>
          </Link>
        </div>
        </>
      )}
    </div>
  );
};

export default LastMap;
