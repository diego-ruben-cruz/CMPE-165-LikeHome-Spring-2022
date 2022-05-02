import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_KEYS = ['0037920bb1msh7e448a635989d78p138d01jsn4b7e7f35cba9', '9e25cd5a46msh60f9cd26501badcp11a6a7jsn02657b7b4fc0'];
let k = 0;

export const search = async (location: string) => {

  // call hotels4 locations/v2/search endpoint
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEYS[k],
    },
    params: {
      locale: 'en_US',
      currency: 'USD',
      query: location
    }
  }

  let resp: AxiosResponse = await axios.request(options);
  if (resp.status == 429) {
    k++;
    resp = await axios.request(options);
  }
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
      'X-RapidAPI-Key': API_KEYS[k]
    }
  };

  let resp: AxiosResponse = await axios.request(options);
  if (resp.status == 429) {
    k++;
    resp = await axios.request(options);
  }
  return resp;
}

export const details = async (id: string) => {

  // call hotels4 properties/get-details endpoint
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEYS[k]
    }
  };

  let resp: AxiosResponse = await axios.request(options);
  if (resp.status == 429) {
    k++;
    resp = await axios.request(options);
  }
  return resp;
}