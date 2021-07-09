interface ServiceClient<T> {
  get Service(): T | undefined;
  setupServiceAsync(wsdlUrl: string): Promise<void>;
}

export { ServiceClient };
