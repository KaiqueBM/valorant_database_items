import { useEffect, useState } from "react";
import api from "../axios/config";

const LastBundle = () => {
  const [weaponAtual, setWeaponAtual] = useState<any>([]);

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
    if (props.themeUuid === "537e0587-416c-f8f3-965c-bba3508156d7") {
      return props;
    }
  }
  return (
    <div className="bg-vava py-16">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl">
        BUNDLE ATUAL DA LOJA
      </div>

      <div className="flex flex-col py-12">
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-2 items-end  h-full">
          {weaponAtual.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            weaponAtual.map((weapon: any) => (
              <div className="p-5 " key={weapon.uuid}>
                <img className="h-20 mx-auto" src={weapon.displayIcon} />
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