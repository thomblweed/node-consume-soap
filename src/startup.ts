import { CountryServiceClient } from './client/CountryServiceClient';

const startup = async (): Promise<void> => {
  const client: CountryServiceClient = CountryServiceClient.Instance;
  try {
    await client.setupServiceAsync('wsdl/CountryInfoService.wsdl');
    console.log('soap client setup successfully');
  } catch (error) {
    console.log(`error`, error);
  }
};

export { startup };
