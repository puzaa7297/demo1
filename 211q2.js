function executeOperations(num) {
    multiplyBy2(num, function(result1) {
      subtract3(result1, function(result2) {
        add10(result2);
      });
    });
  }
  
  function multiplyBy2(num, callback) {
    num = num * 2;
    callback(num);
  }
  
  function subtract3(num, callback) {
    num = num - 3;
    callback(num);
  }
  
  function add10(num) {
    num = num + 10;
    console.log("Answer: " + num);
  }
  
  executeOperations(1);
  