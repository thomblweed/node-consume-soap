import express, { Request, Response } from 'express';
import { CountryServiceClient } from './client/CountryServiceClient';

import {
  CountryInfoServiceClient,
  ListOfCountryNamesByNameResponse,
  TCountryCodeAndName
} from './generated/countryinfoservice';

const server = express();
const port: number = 3001;

server.get('/api/getAllCountryNames', async (req: Request, res: Response) => {
  const countryService: CountryInfoServiceClient =
    CountryServiceClient.Instance.Service;
  try {
    const [result]: [result: ListOfCountryNamesByNameResponse, ...rest: any] =
      await countryService.ListOfCountryNamesByNameAsync({});

    const countryCodeAndName: TCountryCodeAndName[] =
      result.ListOfCountryNamesByNameResult.tCountryCodeAndName;

    res.send(countryCodeAndName);
  } catch (error) {
    console.log(`error`, error.toJSON());
    res.sendStatus(500);
  }
});

server.listen(port, async () => {
  console.log(`server started on port ${port}`);

  const client: CountryServiceClient = CountryServiceClient.Instance;
  try {
    await client.setupServiceAsync('wsdl/CountryInfoService.wsdl');
    console.log('soap client setup successfully');
  } catch (error) {
    console.log(`error`, error);
  }
});
