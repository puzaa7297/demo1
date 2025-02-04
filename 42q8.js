const fs = require('fs');

fs.mkdir('newDir', (err) => {
  if (err) console.log('Error creating directory');
  else console.log('Directory created');
});

fs.unlink('file.txt', (err) => {
    if (err) console.log('Error deleting file');
    else console.log('File deleted');
  });

 
  fs.rename('oldName.txt', 'newName.txt', (err) => {
    if (err) console.log('Error renaming file');
    else console.log('File renamed');
  });

 
  fs.readdir('.', (err, files) => {
    if (err) console.log('Error reading directory:');
    else console.log('Files in directory');
  });
 
