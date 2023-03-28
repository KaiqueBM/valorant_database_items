import { useEffect, useState } from "react";
import api from "../axios/config";

const LastBundle = () => {
  const [weaponAtual, setWeaponAtual] = useState([]);

  const getWeaponAtual = async () => {
    try {
      const response = await api.get("/weapons/skins?language=pt-BR");
      const data = response.data;
      const data_filter = data.data.filter(filter_weapon);
      setWeaponAtual(data_filter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeaponAtual();
  }, []);

  function filter_weapon(props: any) {
    if (props.themeUuid === "a547897d-4bd4-7c77-f5e6-55973f0e89ef") {
      return props;
    }
  }
  return (
    <div className="bg-vava py-16">
      <div className="text-center font-raj font-bold text-8xl">
        BUNDLE ATUAL DA LOJA
      </div>
      <div className="flex flex-row justify-center"></div>

      <div className="flex flex-col py-12">
        <div className="flex flex-row items-end justify-center h-full">
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
        <div className="mx-auto mt-2 pt-12">
          <button className="bg-verm px-10 py-4 font-raj font-semibold text-2xl rounded-lg">
            VER OUTROS BUNDLES
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastBundle;
