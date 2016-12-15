process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    process.stdout.write(input)
});

const rpn = data => {
    data = typeof data === 'string'?data.split(' '):data;

    //if(data.length<3) thronw new Error('Not enoght arguments')

    let tmpResult = []

    for(let i=0; i<data.length; i++){

        if(!Number.isNaN( parseInt(data[i]) )){
            tmpResult.push(data[i])
        }else{
            let prevVal2 = parseInt( tmpResult.pop() )
            let prevVal1 = parseInt( tmpResult.pop() )

            let opResult = 0
            switch(data[i]){
                case '+':
                    opResult = prevVal1 + prevVal2
                break;
                case '*':
                    opResult = prevVal1 * prevVal2
                break;
                case '-':
                    opResult = prevVal1 - prevVal2
                break;
                case '/':
                    opResult = prevVal1 / prevVal2
                break;
            }
            tmpResult.push(opResult)
        }

    }
    if(tmpResult.length>1) throw new Error('Too many arguments')
    return tmp
}
