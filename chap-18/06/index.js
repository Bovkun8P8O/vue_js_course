// let obj = {
//   name: 'WFM 3',
//   age: 40,
// };
//
// let name = obj.name;
// let age = obj.age;
//
// let {name} = obj;
// let {age} = obj;
//
// let {name: n, age: a} = obj;
//
// console.log(n, a);

let array = ['WFM', 30/*, 'blue'*/];

//let name = array[0];
//let age = array[1];
//let color = array[2];
//
// console.log(name, age, color);

let [/*name*/, /*age*/, color='red'] = array;

console.log(/*name, age, */color);