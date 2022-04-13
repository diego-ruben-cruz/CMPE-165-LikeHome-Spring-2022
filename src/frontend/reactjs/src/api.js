const axios = require("axios");

const options = {
  method: 'GET',
  url: 'http://localhost:8080/api/hotel/search',
  params: {location: 'San Jose'}
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});