// let set = new Set();
// let set = new Set([1, 2, 3, 3, 4, 5, 3]);
// let set = new Set().add(2).add(3).add(4).add(6);

// set.add(10);
// set.add('Hello');
// set.add({});
// set.add(10);

// console.log('Set size: ', set.size);
// console.log('Set has: ', set.has(3));
// console.log('Set delete:: ', set.delete(3));
// console.log('Set size: ', set.size);
// console.log('Set has: ', set.has(3));
// console.log('Set clear: ', set.clear());
// console.log('Set size: ', set.size);

let set = new WeakSet();

let key = {};
set.add(key);
console.log(set.size);
key = null;
console.log(set.size);