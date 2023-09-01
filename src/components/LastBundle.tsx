import { useEffect, useState } from "react";
import api from "../axios/config";
import wallpaper from "../assets/wall2.png";
import { Link } from "react-router-dom";

import { ILastArma } from "../@Types/IArma";

const LastBundle = () => {
  const [weaponAtual, setWeaponAtual] = useState<ILastArma[] | null>(null);

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

  function filter_weapon(props: ILastArma) {
    if (props.themeUuid === "c1f88e2b-4aad-d84c-eb8f-b3a103b5eb65") {
      return props;
    }
  }
  return (
    <div
      className="bg-vava py-16"
      style={{ backgroundImage: "url(" + wallpaper + ")" }}
    >
      <div className="text-center font-raj font-bold sm:text-8xl text-7xl text-verm">
        LOJA ATUAL
      </div>

      <p className="md:text-4xl text-3xl text-zinc-900 text-center font-extrabold mt-5">
        Bundle Imperium
      </p>

      <div className="flex flex-col py-12 justify-center">
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-2 items-end  h-full ">
          {weaponAtual &&
            weaponAtual.map((weapon) => (
              <div className="p-5 " key={weapon.uuid}>
                <img className="h-20 mx-auto" src={weapon.displayIcon} />
                <p className="text-center text-black font-fira text-xl">
                  {weapon.displayName}
                </p>
              </div>
            ))}
        </div>
        <div className="mx-auto mt-2 pt-12">
          <Link to={`/bundles`}>
            <button className="bg-zinc-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:bg-verm transition hover:scale-105 text-white">
              VER OUTROS BUNDLES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastBundle;
