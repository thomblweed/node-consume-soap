import { ListOfContinentsByName } from "../definitions/ListOfContinentsByName";
import { ListOfContinentsByNameResponse } from "../definitions/ListOfContinentsByNameResponse";
import { ListOfContinentsByCode } from "../definitions/ListOfContinentsByCode";
import { ListOfContinentsByCodeResponse } from "../definitions/ListOfContinentsByCodeResponse";
import { ListOfCurrenciesByName } from "../definitions/ListOfCurrenciesByName";
import { ListOfCurrenciesByNameResponse } from "../definitions/ListOfCurrenciesByNameResponse";
import { ListOfCurrenciesByCode } from "../definitions/ListOfCurrenciesByCode";
import { ListOfCurrenciesByCodeResponse } from "../definitions/ListOfCurrenciesByCodeResponse";
import { CurrencyName } from "../definitions/CurrencyName";
import { CurrencyNameResponse } from "../definitions/CurrencyNameResponse";
import { ListOfCountryNamesByCode } from "../definitions/ListOfCountryNamesByCode";
import { ListOfCountryNamesByCodeResponse } from "../definitions/ListOfCountryNamesByCodeResponse";
import { ListOfCountryNamesByName } from "../definitions/ListOfCountryNamesByName";
import { ListOfCountryNamesByNameResponse } from "../definitions/ListOfCountryNamesByNameResponse";
import { ListOfCountryNamesGroupedByContinent } from "../definitions/ListOfCountryNamesGroupedByContinent";
import { ListOfCountryNamesGroupedByContinentResponse } from "../definitions/ListOfCountryNamesGroupedByContinentResponse";
import { CountryName } from "../definitions/CountryName";
import { CountryNameResponse } from "../definitions/CountryNameResponse";
import { CountryIsoCode } from "../definitions/CountryIsoCode";
import { CountryIsoCodeResponse } from "../definitions/CountryIsoCodeResponse";
import { CapitalCity } from "../definitions/CapitalCity";
import { CapitalCityResponse } from "../definitions/CapitalCityResponse";
import { CountryCurrency } from "../definitions/CountryCurrency";
import { CountryCurrencyResponse } from "../definitions/CountryCurrencyResponse";
import { CountryFlag } from "../definitions/CountryFlag";
import { CountryFlagResponse } from "../definitions/CountryFlagResponse";
import { CountryIntPhoneCode } from "../definitions/CountryIntPhoneCode";
import { CountryIntPhoneCodeResponse } from "../definitions/CountryIntPhoneCodeResponse";
import { FullCountryInfo } from "../definitions/FullCountryInfo";
import { FullCountryInfoResponse } from "../definitions/FullCountryInfoResponse";
import { FullCountryInfoAllCountries } from "../definitions/FullCountryInfoAllCountries";
import { FullCountryInfoAllCountriesResponse } from "../definitions/FullCountryInfoAllCountriesResponse";
import { CountriesUsingCurrency } from "../definitions/CountriesUsingCurrency";
import { CountriesUsingCurrencyResponse } from "../definitions/CountriesUsingCurrencyResponse";
import { ListOfLanguagesByName } from "../definitions/ListOfLanguagesByName";
import { ListOfLanguagesByNameResponse } from "../definitions/ListOfLanguagesByNameResponse";
import { ListOfLanguagesByCode } from "../definitions/ListOfLanguagesByCode";
import { ListOfLanguagesByCodeResponse } from "../definitions/ListOfLanguagesByCodeResponse";
import { LanguageName } from "../definitions/LanguageName";
import { LanguageNameResponse } from "../definitions/LanguageNameResponse";
import { LanguageIsoCode } from "../definitions/LanguageIsoCode";
import { LanguageIsoCodeResponse } from "../definitions/LanguageIsoCodeResponse";

export interface CountryInfoServiceSoap {
    ListOfContinentsByName(listOfContinentsByName: ListOfContinentsByName, callback: (err: any, result: ListOfContinentsByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfContinentsByCode(listOfContinentsByCode: ListOfContinentsByCode, callback: (err: any, result: ListOfContinentsByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCurrenciesByName(listOfCurrenciesByName: ListOfCurrenciesByName, callback: (err: any, result: ListOfCurrenciesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCurrenciesByCode(listOfCurrenciesByCode: ListOfCurrenciesByCode, callback: (err: any, result: ListOfCurrenciesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CurrencyName(currencyName: CurrencyName, callback: (err: any, result: CurrencyNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesByCode(listOfCountryNamesByCode: ListOfCountryNamesByCode, callback: (err: any, result: ListOfCountryNamesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesByName(listOfCountryNamesByName: ListOfCountryNamesByName, callback: (err: any, result: ListOfCountryNamesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesGroupedByContinent(listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent, callback: (err: any, result: ListOfCountryNamesGroupedByContinentResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryName(countryName: CountryName, callback: (err: any, result: CountryNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryISOCode(countryIsoCode: CountryIsoCode, callback: (err: any, result: CountryIsoCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CapitalCity(capitalCity: CapitalCity, callback: (err: any, result: CapitalCityResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryCurrency(countryCurrency: CountryCurrency, callback: (err: any, result: CountryCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryFlag(countryFlag: CountryFlag, callback: (err: any, result: CountryFlagResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryIntPhoneCode(countryIntPhoneCode: CountryIntPhoneCode, callback: (err: any, result: CountryIntPhoneCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    FullCountryInfo(fullCountryInfo: FullCountryInfo, callback: (err: any, result: FullCountryInfoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    FullCountryInfoAllCountries(fullCountryInfoAllCountries: FullCountryInfoAllCountries, callback: (err: any, result: FullCountryInfoAllCountriesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountriesUsingCurrency(countriesUsingCurrency: CountriesUsingCurrency, callback: (err: any, result: CountriesUsingCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfLanguagesByName(listOfLanguagesByName: ListOfLanguagesByName, callback: (err: any, result: ListOfLanguagesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfLanguagesByCode(listOfLanguagesByCode: ListOfLanguagesByCode, callback: (err: any, result: ListOfLanguagesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    LanguageName(languageName: LanguageName, callback: (err: any, result: LanguageNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    LanguageISOCode(languageIsoCode: LanguageIsoCode, callback: (err: any, result: LanguageIsoCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
