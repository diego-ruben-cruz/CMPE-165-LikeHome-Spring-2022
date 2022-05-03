const api = require("./api");

let searchResults;
let hotelInfo;
api.hotel.search({ location: "San Jose" }).then((hotels) => {
  console.log(hotels);
  searchResults = hotels; // searchResults is null until this point
  api.hotel.getInfo(hotels[0].id).then((hotel) => {
    console.log(hotel);
    hotelInfo = hotel; // hotelInfo is null until this point
  });
});
// hotelInfo and searchResults still null until promise resolves

const accountId = "jerry5@hotmail.com";
api.reservation
  .create({
    accountId,
    hotelId: "624429",
    price: "125",
    checkIn: "03-23-19",
    checkOut: "03-24-19",
    guests: "1",
  })
  .then((res) => {
    console.log(res);
    api.payment
      .pay({
        accountId,
        reservationId: res.id,
        paymentDetails: {
          number: "4242424242424242",
          exp: "03/32",
          cvc: "123",
        },
        saveDetails: true,
        useSeals: false,
      })
      .then((res) => console.log(res));
  });
