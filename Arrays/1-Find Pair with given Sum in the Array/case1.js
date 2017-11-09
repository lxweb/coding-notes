"use strict";
exports.__esModule = true;
/**
 * Brute force case
 * Complexity: O(n^2)
 * In this case we will have some all the cases duplicated
 * Except if you have some value right in the middle(like 5 when you are trying to find 10) sum/2
 * Issues:
 *   - It shows a result containing 2 times the same value
 *   - Duplicated results
 */
exports.case1 = function (list, sum) {
    var result = [];
    for (var a in list) {
        for (var b in list) {
            if (list[a] + list[b] === sum) {
                result.push([a, b]);
            }
        }
    }
    return result;
};
/**
  * Reducind the Complexity of the algorithm
  * Complexity: O( n log(n) ) (?)
  * Issues
  *   - It shows a result containing 2 times the same value
  */
exports.case2 = function (list, sum) {
    var result = [];
    for (var a in list) {
        for (var b = a; b < list.length; b++) {
            if (list[a] + list[b] === sum) {
                result.push([a, b]);
            }
        }
    }
    return result;
};
/**
  * Reducind the Complexity of the algorithm
  *
  * Issues
  * Complexity: O(n)
  */
exports.case3 = function (list, sum) {
    var result = [];
    var map = {};
    for (var a in list) {
        var diff = sum - list[a];
        if (map[list[a]]) {
            result.push([map[list[a]], a]);
        }
        map[diff] = a;
    }
    return result;
};
