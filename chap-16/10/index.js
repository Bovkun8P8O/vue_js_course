// console.log(process.argv)

// for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }

let optimist = require('optimist');

// console.log(optimist.argv);

let message = optimist.argv.message;

console.log('Hello ' + message);