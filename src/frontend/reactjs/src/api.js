const axios = require("axios");

// Wrapper for backend, WIP may not work
// ex: api.payment.pay({<stuff>}).then((resp) => {
//    <setstae or something>
// })
// const reservations = api.reservation.getAll('jerry@hotmail.com').then((resp) => resp);
// idk if await stuff works, may update of do

// example:
// method: 'GET'
// endpoint: 'hotel/search'
// params: { location: San Jose }
// body: {}
const callApi = (method, endpoint, params, body) => {
  const options = {
    method,
    url: 'http://localhost:8080/api/' + endpoint,
    params,
    body
  };

  return axios.request(options).then(function (response) {
      return response;
  }).catch(function (error) {
      console.error(error);
  });
}

// accountId is email
const api = {
  hotel: {
    // {location: 'San Jose', *sortOrder: 'PRICE'} for params on https://rapidapi.com/apidojo/api/hotels4/ under properties/list endoint
    search: (params) => callApi('GET', 'hotel/search', params).then((resp) => resp.data),
    // 624429 <- from the search method
    getInfo: (hotelId) => callApi('GET', `hotel/${hotelId}`).then((resp) => resp.data),
  },
  account: {
    // {
    //   name: 'bob',
    //   password: 'owiahf',
    //   email: 'jerry@hotmail.com',
    //   phone: '1231231234',
    //   creditCard: '4242424242424242',
    //   payment: {
    //     number: "4242424242424242",
    //     exp: "03/32",
    //     cvc: "123",
    //     *address: "123 whatever",
    //     *city: "San Jose",
    //     *state: "CA",
    //     *zip: "64044"
    //   }
    // }
    create: (body) => callApi('POST', 'account/', {}, body).then((resp) => resp.data),
    getAll: () => callApi('GET', 'account/').then((resp) => resp.data),
    get: (accountId) => callApi('GET', `account/${accountId}`).then((resp) => resp.data),
    // same as create but with accountId and body is all optional, can also be used for create
    update: (accountId, body) => callApi('PATCH', `account/${accountId}`,{},body).then((resp) => resp.data),
    delete: (accountId) => callApi('DELETE', `account/${accountId}`).then((resp) => resp.data),
  },
  reservation: {
    // {
    //   accountId: "jerry@hotmail.com",
    //   hotelId: "624429",
    //   price: "125"
    //   checkIn: "03-23-19",
    //   checkOut: "03-24-19",
    //   guests: "1"
    // }
    create: (body) => callApi('POST', 'reservation/',{},body).then((resp) => resp.data),
    // jerry@hotmail.com
    getAll: (accountId) => callApi('GET', `reservation/${accountId}`).then((resp) => resp.data),
    // d07d6878-be86-4d69-961b-b9cbb741f96c <- from create or get methods
    delete: (reservationId) => callApi('DELETE', `reservation/${reservationId}`).then((resp) => resp.data)
  },
  payment: {
    // { *=optional
    //   accountId: "jerry@hotmail.com",
    //   reservationId: "08592959-0906-4086-a50c-05dc3ac5c8ec",
    //   *paymentDetails: {
    //     number: "4242424242424242",
    //     exp: "03/32",
    //     cvc: "123",
    //     *address: "123 whatever",
    //     *city: "San Jose",
    //     *state: "CA",
    //     *zip: "64044"
    //   },
    //   *saveDetails": true,
    //   *useSeals: false
    // }
    pay: (body) => callApi('POST', 'payment/pay',{},body).then((resp) => resp.data)
  }
}
module.exports = api;