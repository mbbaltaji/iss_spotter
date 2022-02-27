const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if(error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('24.57.0.116', (error, coordinates) => {
  if(error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates);
});