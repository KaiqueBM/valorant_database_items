const ArmaVariante = ({ arma }: any) => {
	console.log(arma)
	function formatarTextoVariante(nome: string) {
		const nomeSplit = nome.split("\n")
		const nomeFormatado = nomeSplit[1]
		return nomeFormatado?.replace("(", "")?.replace(")", "")
	}
	return (

		<div className="flex xl:flex-row flex-col">
			{arma.chromas.map((chromas: any, index: number) => (
				<div key={index}>
					{index !== 0 && (
						<div className="xl:mx-2 mx-10 xl:mb-0 mb-8">
							<img className=" mx-auto mt-6" src={chromas.displayIcon} />
							<div className="text-center"><img className="rounded-lg inline-block h-6 mx-1" src={chromas.swatch} /><span className="text-center text-black font-raj text-xl font-semibold">{formatarTextoVariante(chromas.displayName)}</span></div>
							<video className="rounded-lg mt-2" autoPlay muted controls src={chromas.streamedVideo} />
						</div>
					)}
				</div>

			))}
		</div>
	)
}

export default ArmaVariante