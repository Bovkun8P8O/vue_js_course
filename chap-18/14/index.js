// let sym = Symbol('WFM');
// // console.log(typeof sym);
// let s2 = Symbol('1');
// let s3 = Symbol('1');
//
// console.log(s2 === s3); // false`

// let s = Symbol('field');
// let s1 = Symbol('field');
//
// let obj = {
//     age: 20,
//     [s]: 'WFM',
// };

// console.log(obj/*['field']*//*[s1]*/[s]);
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// let num = 1;
// let str = '2';
// let arr = [1, 2];
// let obj = {name: 'WFM'};
//
// console.log('Number: ', typeof num[Symbol.iterator);
// console.log('String: ', typeof str[Symbol.iterator);
// console.log('Array: ', typeof arr[Symbol.iterator);
// console.log('Object: ', typeof obj[Symbol.iterator);

// function createIterator(arr) {
//     let count = 0;
//     return {
//         next() {
//             return count < arr.length ? {value: arr[count++], done: false} : {value: undefined, done: true};
// ``        }
//     };
// }
//
// let iter = createIterator([1, 2, 3, 4]);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

let fib = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {value: cur, done: false};
            }
        }
    }
};

for (let n of fib) {
    if (n > 1500) break;
    console.log(n);
}