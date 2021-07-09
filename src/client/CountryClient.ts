import {
  CountryInfoServiceClient,
  createClientAsync
} from '../generated/countryinfoservice';
import { ServiceClient } from './ServiceClient';

class CountryClient implements ServiceClient<CountryInfoServiceClient> {
  private static instance: CountryClient;
  private service: CountryInfoServiceClient;

  private constructor() {}

  public async setupServiceAsync(wsdlUrl: string): Promise<void> {
    this.service = await createClientAsync(wsdlUrl);
  }

  public static get Instance(): CountryClient {
    if (!this.instance) this.instance = new CountryClient();
    return this.instance;
  }

  public get Service(): CountryInfoServiceClient {
    return this.service;
  }
}

export { CountryClient };
