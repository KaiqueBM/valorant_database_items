import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios/config";

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

				<div className="bg-vava py-16">
					<div className="text-center font-raj font-bold md:text-8xl text-6xl">
						Bundle {displayName}
					</div>

					<div className="flex flex-col py-12 justify-center">
						{bundleAtual.map((weapon: any) => (
							<div className="p-5 " key={weapon.uuid}>
								<img className="h-20 mx-auto" src={weapon.displayIcon} />
								<p className="text-center text-black font-fira text-xl">
									{weapon.displayName}
								</p>
								<p>Níveis:</p>
								<div className="flex flex-row">
								{weapon.chromas.map((chromas: any, index: number) => (
									<div>
										{index !== 0 && (
											<>
												<p>{formatarTextoVariante(chromas.displayName)}</p>
												<img className="h-20 mx-auto" src={chromas.displayIcon} />
												<video autoPlay muted controls src={chromas.streamedVideo} />
											</>
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