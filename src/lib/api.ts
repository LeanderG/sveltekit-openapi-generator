import { Configuration, ConfigurationParameters, PetApi } from './OpenApi';

export const getPetApi = (fetchApi: (info: RequestInfo, init?: RequestInit) => Promise<Response>): PetApi => {
	const configurationParameters: ConfigurationParameters = {
		fetchApi,
		basePath: "https://petstore3.swagger.io/api/v3"
	};
	const configuration = new Configuration(configurationParameters);

	return new PetApi(configuration);
};
