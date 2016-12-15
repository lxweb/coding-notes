'use strict'

process.stdin.resume()

process.stdin.on('data', (data) =>{
  console.log( rpn(data.toString()) );
})

const rpn = data => {

  data = typeof data === 'string'?data.split(' '):data;

  if(data.length<3) throw new Error('Not enoght arguments')

  let tmpResult = [];

  for(let i=0; i<data.length; i++){
    if(!Number.isNaN( parseInt(data[i]) )){
      tmpResult.push(data[i])
    }else{
      let prevVal2 = parseInt(tmpResult.pop())
      let prevVal1 = parseInt(tmpResult.pop())

      //Supported operations
      let opResult = 0
      switch(data[i]){
        default:
        case '+':
          opResult = prevVal1 + prevVal2
          break;
        case '-':
          opResult = prevVal1 - prevVal2
          break;
        case '/':
          opResult = prevVal1 / prevVal2
          break;
        case '*':
          opResult = prevVal1 * prevVal2
          break;
      }
      tmpResult.push(opResult)
    }
  }
  if(tmpResult.length>1) throw new Error('Too many arguments')
  return tmpResult[0]
}

// Test
// process.stdin.emit('data', '3 5 - 8 *') // = -16
// process.stdin.emit('data', '10 4 2 3 + + 3 / *') // = 30
process.stdin.emit('data', '10 4 2 3 + + 3 / *') // = 30
