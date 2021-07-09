interface ServiceClient<T> {
  get Service(): T;
  setupServiceAsync(wsdlUrl: string): Promise<void>;
}

export { ServiceClient };
