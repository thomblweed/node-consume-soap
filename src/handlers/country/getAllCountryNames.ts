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
    CountryServiceClient.Instance.Service!;
  try {
    const [result]: [result: ListOfCountryNamesByNameResponse, ...rest: any] =
      await countryService.ListOfCountryNamesByNameAsync({});

    const countryCodesAndNames: TCountryCodeAndName[] | undefined =
      result.ListOfCountryNamesByNameResult?.tCountryCodeAndName;
    if (!countryCodesAndNames) {
      res.sendStatus(404);
    }

    res.send(countryCodesAndNames);
  } catch (error) {
    console.log(`error`, error.toJSON());
    res.sendStatus(500);
  }
};

export { getAllCountryNames };
