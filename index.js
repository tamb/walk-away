const random = require("random");
const randomWords = require("random-words");

const STARTING = {
  Initializing: 1,
  Installing: 4,
  Downloading: 4,
  Activating: 1,
  Assigning: 1,
  Warning: 3,
  Reading: 2,
  Writing: 2,
};

const ENDING = {
  Installed: 4,
  Activated: 1,
  Assigned: 1,
  Finished: 3,
  Completed: 3,
  Ready: 2,
};

const startingWordsList = [];
const endingWordsList = [];

Object.keys(STARTING).forEach((key) => {
  for (let i = 0; i < STARTING[key]; i++) {
    startingWordsList.push(key);
  }
});

Object.keys(ENDING).forEach((key) => {
  for (let i = 0; i < ENDING[key]; i++) {
    endingWordsList.push(key);
  }
});

console.log(startingWordsList);
console.log(endingWordsList);

// const runtimeInMilliseconds = 10000; // 10 mins
// const startDate = new Date().getMilliseconds();

// for (let i; i < runtimeInMilliseconds + startDate; i++){
//     let term = randomWords(random.int(1,4));
//     setTimeout(()=> {
//         const randInt = random.int(1,10);

//         console.log(`${randInt % ? ()} $()`)
//     }, random.int(10, 8000));
// }
