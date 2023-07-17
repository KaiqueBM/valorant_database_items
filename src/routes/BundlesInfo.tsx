import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios/config";

import '../styles/pages.css'

const BundlesInfo = () => {
	const { uuid } = useParams();
	const displayName = uuid?.replace('%20', ' ')

	const [bundleAtual, setBundleAtual] = useState<any>([]);

	const getBundleAtual = async () => {
		try {
			const response = await api.get("/weapons/skins?language=pt-BR");
			const data = response.data;
			const data_filter = data.data.filter(filter_weapon);
			setBundleAtual(data_filter);
			console.log(data_filter)


		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBundleAtual();
	}, []);

	function filter_weapon(props: any) {
		if (props.displayName.includes(displayName)) {
			return props;
		}
	}

	function formatarTextoVariante(nome: string){
		const nomeSplit = nome.split("\n")
		const nomeFormatado = nomeSplit[1]
		return nomeFormatado?.replace("(","")?.replace(")","")
	}


	return (
		<>
			{bundleAtual.length === 0 ? (
				<p>Carregando...</p>
			) : (

				<div className="py-16">
					<div className="text-center font-raj font-bold md:text-8xl text-6xl text-vava m-5">
						Bundle {displayName}
					</div>

					<div className="flex flex-col py-12 justify-center">
						{bundleAtual.map((weapon: any) => (
							<div className="p-5 bg-vava container rounded-xl" key={weapon.uuid}>
								<img className="h-40 mx-auto mt-6" src={weapon.displayIcon} />
								<p className="text-center text-black font-fira text-5xl font-semibold mt-2">
									{weapon.displayName}
								</p>
								<p className="text-verm font-fira text-4xl font-semibold mt-2 mx-2">Níveis:</p>
								<div className="flex flex-row">
								{weapon.levels.map((nivel: any, index: number) => (
									<div>
										{index !== 0 && (
											<div className="mx-2">
												<p className="text-center text-black font-raj text-xl font-semibold">{nivel.displayName}</p>
												<video className="rounded-lg" autoPlay muted controls src={nivel.streamedVideo} />
											</div>
										)}
									</div>
								))}
								</div>
								<p className="text-verm font-fira text-4xl font-semibold mt-10 mx-2">Variantes:</p>
								<div className="flex flex-row">
								{weapon.chromas.map((chromas: any, index: number) => (
									<div>
										{index !== 0 && (
											<div className="mx-2">
												<img className="h-24 mx-auto mt-6" src={chromas.displayIcon} />
												<div className="text-center"><img className="rounded-lg inline-block h-6 mx-1" src={chromas.swatch} /><span className="text-center text-black font-raj text-xl font-semibold">{formatarTextoVariante(chromas.displayName)}</span></div>
												<video className="rounded-lg mt-2" autoPlay muted controls src={chromas.streamedVideo} />
											</div>
										)}
									</div>
									
								))}
								</div>
							</div>





						))}


						<div className="mx-auto mt-2 pt-12">
							<Link to={`/bundles`}>
								<button className="bg-verm px-10 py-4 font-raj font-semibold text-2xl rounded-lg">
									VER OUTROS BUNDLES
								</button>
							</Link>
						</div>

					</div>
				</div>

			)}
		</>


	)
}



export default BundlesInfo