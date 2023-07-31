const http = require('http') 

// creating the server
const server = http.createServer((req, res) => {
    // sending the response
    res.end("Hello, world!")
})

// starting the server
server.listen(3000, '127.0.0.1', () => {
    console.log("Hello, world!")
})