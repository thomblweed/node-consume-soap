import express, { Request, Response } from 'express';
import { Client } from 'soap';

import { SoapClient } from './client/soap-client';

const server = express();

server.get('/api/getAllCountries', (req: Request, res: Response) => {
  const soapClient: Client = SoapClient.getInstance().getClient()!;
  //   console.log(`describe`, soapClient.describe());
  soapClient.CountryInfoService.CountryInfoServiceSoap12.ListOfCountryNamesByName(
    {},
    (error, result) => {
      if (error) {
        console.log(`error`, error);
        res.sendStatus(400);
      }
      result.ListOfCountryNamesByNameResult.tCountryCodeAndName.forEach(
        (value) => {
          console.log(`value`, value);
        }
      );
      res.send(result);
    }
  );
});

server.listen(3001, async () => {
  console.log(`server started at http://localhost:${3001}`);
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
