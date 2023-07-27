import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../axios/config";

import '../styles/pages.css'
import { IBundle } from "../@Types/IBundle";

const Bundles = () => {

    const [bundles, setBundles] = useState<IBundle[] | null>(null);

    const getBundles = async () => {
        try {
            const response = await api.get("/bundles?language=pt-BR")
            const data = response.data;
            const data_filter = data.data.filter(filter_imgs);
            setBundles(data_filter)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBundles();
    }, [])

    function filter_imgs(props: IBundle) {
        if (props.verticalPromoImage != null) {
            return props
        }
    }



    return (
        <div className="xl:mx-20 mx-0">
            <div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">BUNDLES</div>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center">
                {bundles && (
                    bundles.map((bundle) => (
                        <Link to={`/bundles/${bundle.displayName}`} key={bundle.uuid}>
                            <div className="m-5 transition duration-500 hover:-translate-y-3 cursor-pointer" >
                                <img className="rounded-t-xl" src={bundle.verticalPromoImage} />
                                <p className="py-1 px-1 text-center bg-vava text-verm font-fira font-medium sm:text-xl text-lg border-b-4 border-verm rounded-b-xl">{bundle.displayName}</p>

                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
};

export default Bundles;