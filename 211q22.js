function* combinedGenerator(arr) {
    const fibGen = fibonacciGenerator();
    let arrIndex = 0;
  
    while (arrIndex < arr.length || true) {
      if (arrIndex < arr.length) {
        yield arr[arrIndex++];
      }
      yield fibGen.next().value;
    }
  }
  
  function* fibonacciGenerator() {
    let a = 0, b = 1;
  
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const arr = [10, 20, 30, 40, 50];
  const combinedGen = combinedGenerator(arr);
  
  for (let i = 0; i < 5; i++) {
    console.log(combinedGen.next().value);
  }
  