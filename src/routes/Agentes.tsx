import { useState, useEffect } from "react";
import api from "../axios/config";

import '../styles/pages.css'

const Agentes = () => {

    const [bundles, setBundles] = useState([])

    const getBundles = async () => {
        try {
            const response = await api.get("/bundles?language=pt-BR")
            const data = response.data;
            console.log(data)

            const data_filter = data.data.filter(filter_imgs);
            setBundles(data_filter)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBundles();
    }, [])

    function filter_imgs(props: any) {
        if (props.verticalPromoImage != null) {
            return props
        }
    }



    return (
        <div className="container-fluid">
            <div className="title text-center m-5">BUNDLES</div>
            <div className="flex flex-row flex-wrap justify-center">
                {bundles.length === 0 ? (<p>Carregando...</p>) : (
                    bundles.map((bundle: { uuid: string, displayName: string, verticalPromoImage: string, displayIcon: string }) => (
                        <div className="bundles m-5" key={bundle.uuid}>
                            <img className="web" width="320px" height="452px" src={bundle.verticalPromoImage} />
                            <img className="mobile" src={bundle.displayIcon} />
                            <p className="text-center">{bundle.displayName}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Agentes;