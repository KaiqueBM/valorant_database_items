import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/pages.css";
import { ISprays } from "../@Types/ISprays";

const Sprays = () => {
  const [sprays, setSprays] = useState<ISprays[] | null>();

  const getSprays = async () => {
    try {
      const response = await axios.get(
        "https://valorant-api.com/v1/sprays?language=pt-BR"
      );
      const data = response.data;
      const data_filter = data.data.filter(filter_imgs);
      setSprays(data_filter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSprays();
  }, []);

  function filter_imgs(props: ISprays) {
    if (props.fullTransparentIcon != null) {
      if (props.animationPng != null) {
        props.fullTransparentIcon = props.animationPng;
      }
      return props;
    }
  }

  return (
    <div className="">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">
        SPRAYS
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center w-full">
        {sprays &&
          sprays.map((sprays) => (
            <div
              className="m-5 transition duration-500 hover:-translate-y-3 cursor-pointer"
              key={sprays.uuid}
            >
              <img
                width="350px"
                height="350px"
                className="bg-slate-100 rounded-t-xl"
                src={sprays.fullTransparentIcon}
              />
              <p className="py-1 px-1 bg-vava xl:text-xl text-base text-verm font-fira font-medium border-b-4 rounded-b-xl border-verm text-center">
                {sprays.displayName}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sprays;
