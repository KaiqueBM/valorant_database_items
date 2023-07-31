import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/pages.css";
import { IChaveiros } from "../@Types/IChaveiros";

const Chaveiros = () => {
  const [chaveiros, setChaveiros] = useState<IChaveiros[] | null>(null);

  const getChaveiros = async () => {
    try {
      const response = await axios.get(
        "https://valorant-api.com/v1/buddies?language=pt-BR"
      );
      const data = response.data;
      setChaveiros(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChaveiros();
  }, []);

  return (
    <div className="">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">
        CHAVEIROS
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center w-full">
        {chaveiros &&
          chaveiros.map((bundle) => (
            <div
              className="m-5 bg-slate-100 rounded-xl transition duration-500 hover:-translate-y-3 cursor-pointer"
              key={bundle.uuid}
            >
              <img
                className=" bg-slate-100 rounded-t-xl h-60 p-5 mx-auto"
                src={bundle.displayIcon}
              />
              <p className="py-1 px-1 bg-vava text-verm font-fira font-medium border-b-4 rounded-b-xl border-verm text-center">
                {bundle.displayName}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Chaveiros;
