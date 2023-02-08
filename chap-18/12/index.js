// let map = new Map();
//
// map.set('name', 'WFM');
// map.set('age', 20);
//
// console.log(map.get('name'/*'age'*/));
//
// let obj1 = {};
// let obj2 = {};
//
// map.set(obj1, 10);
// map.set(obj2, 50);
//
// console.log('Size: ', map.size);
// console.log('Has: ', map.has(obj2));
// console.log('Delete: ', map.delete(obj2));
// console.log('Size: ', map.size);
// console.log('Has: ', map.has(obj2));

// let map = new Map([['name', 'WFM'], ['age', 20],]);

// console.log(map);

// for (let /*val*//*keys*/entr of map./*values*//*keys*/entries()) {
//     console.log(/*'Value: '*//*'Keys: '*/`${entr[0]} - ${entr[1]}`/*, /*val*//*keys*/);
// }

let map = new WeakMap();

let key = {};
map.set(key, 'key');
console.log('Size: ', map.size);
key = null;
console.log('Size: ', map.size);