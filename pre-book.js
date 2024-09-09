var axios = require('axios');
const util = require('util');

// env
require('dotenv').config();

let apiKey = process.env.API_KEY;   
let requestData = {
    "search": {
        "dates": {
            "from": "2024-09-18",
            "to": "2024-09-19"
        },
        "propertyId": 19912,
        "nationality": "FR",
        "pax": [
            {
                "adults": 2,
                "children": [7,2]
            },
            {
                "adults": 1,
                "children": []
            }
        ]
    },
    "rooms": [
        
        {
            // room code
            // "roomCode": "DLX",
            // OR room id
            "roomId": 31446,
            
            // room rate code
            // "rateCode": "EARLYBIRD",
            // OR rate plan id
            "ratePlanId": 19080,

            "expectedPrice": {
                "amount": 301.4,
                "currency": "USD"
            }
        }
    ]
}

var config = {
  method: 'post',
  url: 'https://book-api.hyperguest.com/2.0/booking/pre-book',
  headers: { 
    'Authorization': `Bearer ${apiKey}`,
    'Accept-Encoding': 'gzip, deflate'
  },
  data : requestData
};


axios(config)
.then(function (response) {
  console.log(util.inspect(response.data, { showHidden: true, depth: null,colors: true }));
})
.catch(function (error) {
  console.log(error);
});


