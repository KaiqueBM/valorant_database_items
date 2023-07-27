export interface IMap{
	uuid: string,
	  displayName: string,
	  coordinates: string,
	  displayIcon: string,
	  listViewIcon: string,
	  splash: string,
	  assetPath: string,
	  mapUrl: string,
	  xMultiplier: number,
	  yMultiplier: number,
	  xScalarToAdd: number,
	  yScalarToAdd: number,
	  callouts: [
		{ regionName: string, 
		superRegionName: string, 
		location: { 
		  x: number, 
		  y: number
		} 
	  }
	]
  }