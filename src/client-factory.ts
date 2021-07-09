import { createClientAsync } from 'soap';

const createClientFactoryAsync = <T>(
  ...args: Parameters<typeof createClientAsync>
): Promise<T> => {
  return createClientAsync(args[0], args[1], args[2]) as any;
};

export { createClientFactoryAsync };
