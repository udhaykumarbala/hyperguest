const axios = require('axios');
const util = require('util');
// env
require('dotenv').config();


function createBooking(bookingData) {

  let apiKey = process.env.API_KEY;
  const config = {
    method: 'post',
    url: 'https://book-api.hyperguest.com/2.0/booking/create',
    headers: { 
      'Authorization': `Bearer ${apiKey}`,
      'Accept-Encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    data: bookingData
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

// Example usage:
const bookingData = {
  "dates": {
    "from": "2024-10-01",
    "to": "2024-10-02"
  },
  "propertyId": 19912,
  "leadGuest": {
    "birthDate": "1991-01-01",
    "contact": {
      "address": "308 Negra Arroyo Lane",
      "city": "Albuquerque",
      "country": "US",
      "email": "test@example.test",
      "phone": "555-6162",
      "state": "New Mexico ",
      "zip": "87111"
    },
    "name": {
      "first": "Test",
      "last": "Example"
    },
    "title": "MR"
  },
//   "reference": {
//     "agency": "myref-1234"
//   },
//   "paymentDetails": {
//     "type": "credit_card",
//     "details": {
//       "number": "1234123412341234",
//       "cvv": "123",
//       "expiry": {
//         "month": "1",
//         "year": "2028"
//       },
//       "name": {
//         "first": "test",
//         "last": "test"
//       }
//     }
//   },
  "rooms": [
    {
    //   "roomCode": "SGL",
      "roomId": 31446,
    //   "rateCode": "BAR",
      "ratePlanId": 19080,
      "expectedPrice": {
        "amount": 301.4,
        "currency": "USD"
      },
      "guests": [
        {
          "birthDate": "1978-01-01",
          "contact": {
            "address": "308 Negra Arroyo Lane",
            "city": "Albuquerque",
            "country": "US",
            "email": "test@example.test",
            "phone": "555-6162",
            "state": "New Mexico ",
            "zip": "87111"
          },
          "name": {
            "first": "test",
            "last": "test"
          },
          "title": "MR"
        },
        {
          "birthDate": "1978-01-01",
          "name": {
            "first": "test",
            "last": "test"
          },
          "title": "MR"
        }
      ],
      "specialRequests": [
        "Non-smoking room preferred",
        "Twin bed please"
      ]
    }
  ],
  "meta": [
  ],
  "isTest": false,
  "groupBooking": false
};

createBooking(bookingData)
  .then(data => console.log(util.inspect(data, { showHidden: true, depth: null, colors: true })))
  .catch(error => console.error(error));