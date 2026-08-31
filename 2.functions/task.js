function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  for (const num of arr) {
    if (num >= max) {
      max = num;
    }
    if (num <= min) {
      min = num
    }
    // avg += num;
  }
  avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return(+arr.reduce((acc, curr) => acc + curr, 0))
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return (+(Math.max(...arr) - Math.min(...arr)))
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = arr.filter(n => n % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  let summOdd = arr.filter(n => n % 2 !== 0).reduce((acc, curr) => acc + curr, 0);

  return sumEven - summOdd
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let even = arr.filter(n => n % 2 === 0);
  return even.reduce((acc, curr) => acc + curr, 0) / even.length
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult
}



