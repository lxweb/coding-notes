import {case1, case2, case3} from './case1';

let list = [];
for(let i=0; i<parseInt(Math.random()*10**5); i++){
  list.push( parseInt(Math.random()*10));
}
console.log(`Useing a list of ${list.length} items`);

console.time('Case 1');
case1( list, 10 );
console.timeEnd('Case 1');

console.time('Case 2');
case2( list, 10 );
console.timeEnd('Case 2');

console.time('Case 3');
case3( list, 10 );
console.timeEnd('Case 3');
