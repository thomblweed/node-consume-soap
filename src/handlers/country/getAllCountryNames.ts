import { Request, Response } from 'express';

import { CountryServiceClient } from '../../client/CountryServiceClient';
import {
  CountryInfoServiceClient,
  ListOfCountryNamesByNameResponse,
  TCountryCodeAndName
} from '../../generated/countryinfoservice';

interface CountryNames {
  countryCodesAndNames: TCountryCodeAndName[];
}

const getAllCountryNames = async (
  req: Request,
  res: Response<CountryNames>
): Promise<void> => {
  const countryService: CountryInfoServiceClient =
    CountryServiceClient.Instance.Service!;
  try {
    const [result]: [result: ListOfCountryNamesByNameResponse, ...rest: any] =
      await countryService.ListOfCountryNamesByNameAsync({});

    let countryCodesAndNames: TCountryCodeAndName[] | undefined =
      result.ListOfCountryNamesByNameResult?.tCountryCodeAndName;
    if (!countryCodesAndNames) countryCodesAndNames = [];
    res.send({ countryCodesAndNames: countryCodesAndNames });
  } catch (error) {
    console.log(`error`, error);
    res.sendStatus(500);
  }
};

export { getAllCountryNames };
