import { createClientFactoryAsync } from '../client-factory';

export class SoapClient<T> {
  private static instance: any;
  private client: any;

  private constructor() {}

  public async setupClientAsync<T>(wsdlUrl: string): Promise<void> {
    this.client = await createClientFactoryAsync<T>(wsdlUrl);
  }

  public static getInstance<T>(): SoapClient<T> {
    if (!this.instance) this.instance = new SoapClient<T>();
    return this.instance;
  }

  public get Client(): T {
    return this.client;
  }
}
