# Likehome Backend

## Requirements

1. node version 14 (12 should work)

## How to Run

1. Navigate to /API directory
2. ```npm i```
3. ```npm run build:start```

## Calling API
example in js using axios
```
var axios = require("axios").default;

var options = {
method: 'GET',
url: 'http://localhose:8080/api/hotel/search',
params: {location: 'San Jose', sortOrder: 'STAR_RATING_HIGHEST_FIRST'},
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
```
example response
```
[{
    "id": 624429,
    "name": "E-Z 8 Motel Newark",
    "starRating": 2.5,
    "urls": {},
    "address": {
        "streetAddress": "5555 Cedar Court",
        "extendedAddress": "",
        "locality": "Newark",
        "postalCode": "94560",
        "region": "CA",
        "countryName": "United States",
        "countryCode": "us",
        "obfuscate": false
    },
    "welcomeRewards": {
        "collect": true
    },
    "guestReviews": {
        "unformattedRating": 5.2,
        "rating": "5.2",
        "total": 618,
        "scale": 10
    },
    "landmarks": [
        {
            "label": "City center",
            "distance": "15 miles"
        },
        {
            "label": "Levi's Stadium",
            "distance": "9.1 miles"
        }
    ],
    "geoBullets": [],
    "ratePlan": {
        "price": {
            "current": "$51",
            "exactCurrent": 50.88,
            "old": "$57",
            "fullyBundledPricePerStay": "total $56"
        },
        "features": {
            "freeCancellation": false,
            "paymentPreference": false,
            "noCCRequired": false
        },
        "type": "HC"
    },
    "neighbourhood": "Newark",
    "deals": {
        "secretPrice": {
            "dealText": "Save more with Secret Prices"
        },
        "priceReasoning": "DRR-445"
    },
    "messaging": {
        "scarcity": "4 left on our app"
    },
    "badging": {},
    "coordinate": {
        "lat": 37.53121,
        "lon": -122.00633
    },
    "roomsLeft": 4,
    "providerType": "LOCAL",
    "supplierHotelId": 16037708,
    "isAlternative": false,
    "optimizedThumbUrls": {
        "srpDesktop": "https://exp.cdn-hotels.com/hotels/17000000/16040000/16037800/16037708/918cd7b0_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
    }
}]
```
