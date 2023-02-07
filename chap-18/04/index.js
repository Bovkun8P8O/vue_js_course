// const func = (a = 20, b = /*a + */50) => {
//     a = a || 15;
//     return a + b;
// }
//
// console.log(func(60 /*undefined*/, 80));
// console.log(func(30));

const c = 90;
const c2 = () => 200;

const func = (a = 20, b = a + /*c*/c2()) => {
    return a + b;
};

console.log(func(30));