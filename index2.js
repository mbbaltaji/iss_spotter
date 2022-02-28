const { nextISSTimesForMyLocation } = require('./iss_promised');

// // fetchMyIP returns a promise that contains a body (IP address)
// fetchMyIP() 
//   .then(fetchCoordsByIP)  // returns promise that contains coordinates
//   .then(fetchISSFlyOverTimes)
//   .then((body => console.log(body)))
  

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });