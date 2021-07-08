// import * as soap from 'soap';
// import { Client } from 'soap';
import {
  CountryInfoServiceClient,
  createClientAsync
} from '../types/countryinfoservice';

export class SoapClient {
  private static INSTANCE: SoapClient;
  private client: CountryInfoServiceClient | undefined;

  private constructor() {}

  public async setupClientAsync<T>(wsdlUrl: string): Promise<void> {
    this.client = await createClientAsync(wsdlUrl);
  }

  public static getInstance(): SoapClient {
    if (!this.INSTANCE) this.INSTANCE = new SoapClient();
    return this.INSTANCE;
  }

  public getClient(): CountryInfoServiceClient | undefined {
    return this.client;
  }
}
