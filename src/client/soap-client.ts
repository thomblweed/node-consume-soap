import * as soap from 'soap';
import { Client } from 'soap';

export class SoapClient {
  private static INSTANCE: SoapClient;
  private client: Client | undefined;

  private constructor() {}

  public async setupClientAsync(wsdlUrl: string): Promise<void> {
    this.client = await soap.createClientAsync(wsdlUrl);
  }

  public static getInstance(): SoapClient {
    if (!this.INSTANCE) this.INSTANCE = new SoapClient();
    return this.INSTANCE;
  }

  public getClient(): Client | undefined {
    return this.client;
  }
}
