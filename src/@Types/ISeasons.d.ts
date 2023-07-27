export interface ISeason {
	uuid: string,
	displayName: string,
	type: string,
	startTime: string,
	endTime: string,
	parentUuid: string,
	assetPath: string
}

export interface IVersion {
	branch: string,
	buildDate: string,
	buildVersion: string,
	engineVersion: string,
	manifestId: string,
	riotClientBuild: string,
	riotClientVersion: string,
	version: string,
}