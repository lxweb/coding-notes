"use strict";
exports.__esModule = true;
var case1_1 = require("./case1");
var list = [];
for (var i = 0; i < parseInt(Math.random() * Math.pow(10, 5)); i++) {
    list.push(parseInt(Math.random() * 10));
}
console.log("Useing a list of " + list.length + " items");
console.time('Case 1');
case1_1.case1(list, 10);
console.timeEnd('Case 1');
console.time('Case 2');
case1_1.case2(list, 10);
console.timeEnd('Case 2');
console.time('Case 3');
case1_1.case3(list, 10);
console.timeEnd('Case 3');
