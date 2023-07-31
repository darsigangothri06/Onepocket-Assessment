const fs = require("fs")

fs.readFile('./data.txt', 'utf-8', (error, data) => {
    // read the data into a variable 'data'
    // splitting the data into words
    let words = data.split(' ');
    // counting number of words in the file
    console.log(words.length);
})
console.log("Reading file...")