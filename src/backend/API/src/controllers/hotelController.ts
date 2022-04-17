import httpStatus from 'http-status';
import { db } from '../db';

import * as hotelServices from '../services/hotelServices';

export const searchHotels = async (req: any, res: any, next: any) => {
  console.log('Called searchHotels method');

  const { location } = req.query;

  try {
    // call api and get data
    const searchResp = await hotelServices.search(location);
    const destinationId = searchResp.data.suggestions[0].entities[0].destinationId;
    delete req.query.location;
    const resp = await hotelServices.list({...req.query, destinationId});
    res.status(httpStatus.OK).json(resp.data.data.body.searchResults.results);
  } catch (err) {
    console.log('search error');
    next(err);
  }
}

export const getDetails = async (req: any, res: any, next: any) => {
  console.log('Called getDetails method');

  const { hotelId } = req.params;

  try {
    // call api and get data
    const resp = await hotelServices.details(hotelId);
    res.status(httpStatus.OK).json(resp.data);
  } catch (err) {
    console.log('search error');
    next(err);
  }
}

export const listHotels = async (req: any, res: any, next: any) => {
  console.log('Called listHotels method');

  const { name, ammens } = req.body;
  const why = req.body;

  try {
    // call api and get data
    const resp = await hotelServices.list(req.query)
    res.status(httpStatus.OK).json(resp.data.body.searchResults.results);
   
    console.log(why);
    await db.collection('Hotels').doc(name).set(why, {merge:true});
    res.status(httpStatus.OK).json({'uh': 'huh'});
  } catch (err) {
    console.log('search error');
    next(err);
  }
}
