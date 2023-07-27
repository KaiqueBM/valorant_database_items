interface Arma {
	arma: {
		uuid: string,
		displayName: string,
		themeUuid: string,
		contentTierUuid: string,
		displayIcon: string,
		wallpaper: string,
		assetPath: string,
		chromas: [{
			uuid: string,
			displayName: string,
			displayIcon: string,
			fullRender: string,
			swatch: string,
			streamedVideo: string,
			assetPath: string
		}],
		levels: [{
			uuid: string,
			displayName: string,
			levelItem: string,
			displayIcon: string,
			streamedVideo: string,
			assetPath: string
		}]
	}
}

const ArmaNivel = ({ arma }: Arma) => {
	return (
		<div className="flex xl:flex-row flex-col">
			{arma.levels.map((nivel, index) => (
				<div key={index}>
					{index !== 0 && (
						<div className="xl:mx-2 mx-10 xl:mb-0 mb-8">
							<p className="text-center text-black font-raj text-xl font-semibold">{nivel.displayName}</p>
							<video className="rounded-lg" autoPlay muted controls src={nivel.streamedVideo} />
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default ArmaNivel