function createInfiniteIterator(limit) {
    let current = 1; 
    let steps = 0; 
  
    return {
      [Symbol.iterator]() {
        return this; 
      },
      next() {
        if (steps < limit) {
          steps++; 
          return { value: current++, done: false }; 
        }
        return { done: true };
      }
    };
  }
  
  const infiniteIterator = createInfiniteIterator(5); 
  
  for (let value of infiniteIterator) {
    console.log(value); 
  }
  