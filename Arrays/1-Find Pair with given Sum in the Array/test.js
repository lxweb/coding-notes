"use strict";
exports.__esModule = true;
var case1_1 = require("./case1");
var test = function (currentCase, input, expected) {
    if (currentCase(input[0], input[1]).toString() === expected.toString()) {
        return console.log('It Works!');
    }
    return console.warn('Error found!');
};
// Pair found at index 0 and 2 (8 + 2)
// Pair found at index 1 and 4 (7 + 3)
test(case1_1.case1, [[8, 7, 2, 5, 3, 1], 10], [[0, 2], [1, 4]]);
test(case1_1.case2, [[8, 7, 2, 5, 3, 1], 10], [[0, 2], [1, 4]]);
test(case1_1.case3, [[8, 7, 2, 5, 3, 1], 10], [[0, 2], [1, 4]]);
