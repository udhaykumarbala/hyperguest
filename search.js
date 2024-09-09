
// create a request to https://search-api.hyperguest.com/2.0/?checkIn=2023-01-01&nights=2&guests=1&hotelIds=1&customerNationality=DE
// with a GET request
// and print the response

const axios = require('axios');
const util = require('util');
const fs = require('fs');

// env
require('dotenv').config();

let apiKey = process.env.API_KEY;

const headers = { 
    'Authorization': `Bearer ${apiKey}`,
    'Accept-Encoding': 'gzip, deflate'
}

axios.get('https://search-api.hyperguest.com/2.0/?checkIn=2024-10-01&nights=2&guests=1&hotelIds=19912&customerNationality=FR', { headers })
  .then(response => {
    console.log(util.inspect(response.data.results[0], { showHidden: true, depth: null,colors: true }))

    // write the response to a file
    fs.writeFileSync('response.json', JSON.stringify(response.data, null, 2))
  })
  .catch(error => {
    console.error(error)
  })
