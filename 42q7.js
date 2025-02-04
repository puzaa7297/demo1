const fs = require('fs');
fs.appendFile('file.txt', 'feeling something somrthing...\n', (err) => {
  if (err) {
    console.log('Error appending to file');
  } else {
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file');
      } else {
        console.log(data);
      }
    });
  }
});
