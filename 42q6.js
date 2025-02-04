const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err.message);
  } else {
    console.log(data);
  }
});