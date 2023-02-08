// http://date.jsontest.com/

// function oldDelay(ms, func) {
//     setTimeout(function () {
//         func();
//     }, ms);
// }
//
// oldDelay(3000, function () {
//     console.log('Old delay passed.');
// });

// function delay(ms = 1000) {
//     /*const promise =*/ return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             /*resolve*/reject();
//         }, ms);
//     });
//     // return promise;
// }
//
// delay(4000)
//     .then(() => {
//         console.log('New delay passed.');
//     })
//     .catch(() => {
//         console.info('Error.');
//     });

import $ from 'jquery';

let promise = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://d1ate.jsontest.com/',
        dataType: 'json',
        success: function(response) {
            resolve(response);
        },
        error: function(error) {
            reject(error);
        }
    });
});



promise
    .then((data) => {
        // console.log('Success: ', data);
        return data.date;
    })
    .then((date) => {
        console.log('Date: ', date);
    })
    .catch((error) => {
        console.info('Server error: ', error);
    });
