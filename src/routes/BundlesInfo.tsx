import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios/config";

import '../styles/pages.css'
import ArmaVariante from "../components/ArmaVariante";
import ArmaNivel from "../components/ArmaNivel";

const BundlesInfo = () => {
	const { uuid } = useParams();
	const displayName = uuid?.replace('%20', ' ')

	const [bundleAtual, setBundleAtual] = useState<any>([]);
	const [armaAtual, setArmaAtual] = useState<any>([]);
	const [showModalVariante, setShowModalVariante] = useState<boolean>(false);
	const [showModalNivel, setShowModalNivel] = useState<boolean>(false);

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

	function chamarModalNivel(weapon: any) {
		setArmaAtual(weapon)
		setShowModalNivel(true)
	}

	function chamarModalVariante(weapon: any) {
		setArmaAtual(weapon)
		setShowModalVariante(true)
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


					{showModalNivel ? (
						<>
							<div
								className="justify-center items-center align-middle flex overflow-x-hidden overflow-y-auto fixed inset-0 left-0 right-0 z-50 outline-none focus:outline-none"
							>
								<div className="relative w-auto mx-auto max-w-7xl xl:h-auto h-full">
									{/*content*/}
									<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-vava outline-none focus:outline-none">
										{/*header*/}
										<div className="flex items-start justify-between p-5 border-b-4 border-solid border-verm rounded-t">
											<h3 className="text-verm font-fira text-5xl font-semibold mx-2 text-center uppercase">
												Variantes
											</h3>
											<button
												className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
												onClick={() => setShowModalNivel(false)}
											>
												<span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-verm transition">
													X
												</span>
											</button>
										</div>
										{/*body*/}
										<div className="relative p-6 flex-auto">
											<ArmaNivel arma={armaAtual} />
										</div>
										{/*footer*/}
										<div className="flex items-center justify-end p-6 border-t-4 border-solid border-verm rounded-b">
											<button className="bg-zinc-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:bg-verm transition hover:scale-105 text-white"
												type="button"
												onClick={() => setShowModalNivel(false)}>
												FECHAR
											</button>

										</div>
									</div>
								</div>
							</div>
							<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
						</>
					) : null}

					{showModalVariante ? (
						<>
							<div
								className="justify-center items-center align-middle flex overflow-x-hidden overflow-y-auto fixed inset-0 left-0 right-0 z-50 outline-none focus:outline-none"
							>
								<div className="relative w-auto mx-auto max-w-7xl xl:h-auto h-full">
									{/*content*/}
									<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-vava outline-none focus:outline-none">
										{/*header*/}
										<div className="flex items-start justify-between p-5 border-b-4 border-solid border-verm rounded-t">
											<h3 className="text-verm font-fira text-5xl font-semibold mx-2 text-center uppercase">
												Variantes
											</h3>
											<button
												className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
												onClick={() => setShowModalVariante(false)}
											>
												<span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-verm transition">
													X
												</span>
											</button>
										</div>
										{/*body*/}
										<div className="relative p-6 flex-auto">
											<ArmaVariante arma={armaAtual} />
										</div>
										{/*footer*/}
										<div className="flex items-center justify-end p-6 border-t-4 border-solid border-verm rounded-b">
											<button className="bg-zinc-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:bg-verm transition hover:scale-105 text-white"
												type="button"
												onClick={() => setShowModalVariante(false)}>
												FECHAR
											</button>

										</div>
									</div>
								</div>
							</div>
							<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
						</>
					) : null}




					<div className="flex flex-col py-12 justify-center">
						{bundleAtual.map((weapon: any) => (
							<div className="p-5 bg-vava container xl:rounded-xl" key={weapon.uuid}>
								<img className="xl:h-40 mx-auto mt-6" src={weapon.displayIcon} />
								<p className="text-center text-black font-fira text-5xl font-semibold mt-2">
									{weapon.displayName}
								</p>
								{weapon.levels.length > 1 ? (<p className="text-zinc-600 text-center font-fira md:text-2xl text-xl mt-2">Contém {weapon.levels.length} níveis</p>) : (<p className="text-zinc-600 text-center font-fira md:text-2xl text-xl mt-2">Não contém níveis</p>)}
								{weapon.chromas.length > 1 ? (<p className="text-zinc-600 text-center font-fira md:text-2xl text-xl">{weapon.chromas.length} variantes</p>) : (<p className="text-zinc-600 text-center font-fira md:text-2xl text-xl">Sem variantes</p>)}

								<div className="flex justify-center my-5">
								{weapon.levels.length > 1 && (
											<button
												className="mx-2 bg-zinc-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:bg-verm transition hover:scale-105 text-white duration-150"
												type="button"
												onClick={() => chamarModalNivel(weapon)}
											>
												Ver níveis
											</button>
								)}
								{weapon.chromas.length > 1 && (
											<button
												className="mx-2 bg-zinc-800 px-10 py-4 font-raj font-semibold text-2xl rounded-lg hover:bg-verm transition hover:scale-105 text-white duration-150"
												type="button"
												onClick={() => chamarModalVariante(weapon)}
											>
												Ver variantes
											</button>
								)}
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