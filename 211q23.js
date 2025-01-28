function* cumulativeSum(arr) {
    let sum = 0;
    
    for (let num of arr) {
      sum += num;
      yield sum;
    }
    
    return sum;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const gen = cumulativeSum(arr);
  
  let result;
  for (let value of gen) {
    console.log(value);
  }
  
  result = gen.next(); // To get the final return value
  console.log('Final sum:', result.value);
  