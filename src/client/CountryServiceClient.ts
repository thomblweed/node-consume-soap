import {
  CountryInfoServiceClient,
  createClientAsync
} from '../generated/countryinfoservice';
import { ServiceClient } from './ServiceClient';

class CountryServiceClient implements ServiceClient<CountryInfoServiceClient> {
  private static instance: CountryServiceClient;
  private service: CountryInfoServiceClient;

  private constructor() {}

  public async setupServiceAsync(wsdlUrl: string): Promise<void> {
    this.service = await createClientAsync(wsdlUrl);
  }

  public static get Instance(): CountryServiceClient {
    if (!this.instance) this.instance = new CountryServiceClient();
    return this.instance;
  }

  public get Service(): CountryInfoServiceClient {
    return this.service;
  }
}

export { CountryServiceClient };
