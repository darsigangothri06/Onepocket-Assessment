const calculate = (arr) => {
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    // we can also use reduce method
    // answer = arr.reduce((prev, curr) => prev + curr, 0)
    return answer;
}

console.log(calculate([1,2,3]));