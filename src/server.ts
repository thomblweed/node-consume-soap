import express, { Request, Response } from 'express';

import { SoapClient } from './client/soap-client';
import {
  CountryInfoServiceClient,
  ListOfCountryNamesByNameResponse,
  TCountryCodeAndName
} from './types/countryinfoservice';

const server = express();
const port: number = 3001;

server.get('/api/getAllCountries', async (req: Request, res: Response) => {
  const soapClient: CountryInfoServiceClient =
    SoapClient.getInstance().getClient()!;

  try {
    const [result]: [
      result: ListOfCountryNamesByNameResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ] = await soapClient.ListOfCountryNamesByNameAsync(undefined);

    const countryCodeAndName: TCountryCodeAndName[] =
      result.ListOfCountryNamesByNameResult.tCountryCodeAndName;

    countryCodeAndName.forEach((value) => {
      console.log(`value`, value);
    });

    res.send(countryCodeAndName);
  } catch (error) {
    console.log(`error`, error.toJSON());
    res.sendStatus(500);
  }
});

server.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
  try {
    const client: SoapClient = SoapClient.getInstance();
    await client.setupClientAsync(
      'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?wsdl'
    );
    console.log('soap client setup successfully');
  } catch (error) {
    console.log(`error`, error);
  }
});
