/**
 * Brute force case
 * Complexity: O(n^2)
 * In this case we will have some all the cases duplicated
 * Except if you have some value right in the middle(like 5 when you are trying to find 10) sum/2
 * Issues:
 *   - It shows a result containing 2 times the same value
 *   - Duplicated results
 */
export const case1 = (list, sum) => {
  let result = [];
  for(let a in list){
    for(let b in list ){
      if(list[a]+list[b] === sum){
        result.push([a,b]);
      }
    }
  }
  return result;
}

/**
  * Reducind the Complexity of the algorithm
  * Complexity: O( n log(n) ) (?)
  * Issues
  *   - It shows a result containing 2 times the same value
  */

export const case2 = (list, sum)=>{
  let result = [];
  for(let a in list){
    for(let b=a; b<list.length; b++){
      if(list[a]+list[b] === sum){
        result.push([a,b]);
      }
    }
  }
  return result;
}


/**
  * Reducind the Complexity of the algorithm
  *
  * Issues
  * Complexity: O(n)
  */

export const case3 = (list, sum)=>{
  let result = [];
  let map = {};
  for(let a in list){
    let diff = sum - list[a];
    if(map[list[a]]){
      result.push([ map[list[a]], a ]);
    }
    map[diff] = a;
  }
  return result;
}
