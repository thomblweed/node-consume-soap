import { Request, Response } from 'express';

import { CountryServiceClient } from '../../client/CountryServiceClient';
import {
  CountryInfoServiceClient,
  ListOfCountryNamesByNameResponse,
  TCountryCodeAndName
} from '../../generated/countryinfoservice';

const getAllCountryNames = async (
  req: Request,
  res: Response
): Promise<void> => {
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
};

export { getAllCountryNames };
