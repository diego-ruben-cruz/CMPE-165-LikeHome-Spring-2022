import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const search = async (location: string) => {

  // call hotels4 locations/v2/search endpoint
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '748ac67f3cmshf3e99f25f444fd0p1d75ebjsn397e2d620ed4'
    },
    params: {
      locale: 'en_US',
      currency: 'USD',
      query: location
    }
  }

  const resp: AxiosResponse = await axios.request(options);
  return resp;
}

interface listParams {
  destinationId: string,
  pageNumber?: string,
  pageSize?: string,
  checkIn?: string,
  checkOut?: string,
  adults1?: string,
  sortOrder?: string,
  priceMin?: string,
  priceMax?: string
  locale?: string,
  currency?: string
}

const dateStrings = () => {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();
  const today = yyyy + '-' + mm + '-' + dd;

  date.setDate(date.getDate() + 1);
  dd = String(date.getDate()).padStart(2, '0');
  mm = String(date.getMonth() + 1).padStart(2, '0');
  yyyy = date.getFullYear();
  const tommorow = yyyy + '-' + mm + '-' + dd;

  return {
    today,
    tommorow
  }
}

export const list = async (params: listParams) => {
  const dates = dateStrings();

  const defaults = {
    locale: 'en_US',
    currency: 'USD',
    checkIn: dates.today,
    checkOut: dates.tommorow,
    pageNumber: '1',
    pageSize: '25',
    adults1: '1',
    sortOrder: 'PRICE'
  }

  // call hotels4 properties/list endpoint
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      ...defaults,
      ...params
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '748ac67f3cmshf3e99f25f444fd0p1d75ebjsn397e2d620ed4'
    }
  };

  const resp: AxiosResponse = await axios.request(options);
  return resp;
}