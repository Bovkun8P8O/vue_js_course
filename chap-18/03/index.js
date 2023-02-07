const original = function () {
    return 100;
}

// console.log(original());

// const arrow = (num, num2) => {
//     return 150 + num * num2;
// };

// console.log(arrow(50, 4));


// const arrow2 = (num, num2) => 150 + num * num2;
//
// console.log(arrow2(50, 3));

// const arrow3 = num => 150 + num;
//
// console.log(arrow3(60));

const obj = {
    name: 'WFM',

    logName: function() {
        setTimeout(() => {
            console.log('Name: ', this.name);
        }, 2000)
    }
};

obj.logName();