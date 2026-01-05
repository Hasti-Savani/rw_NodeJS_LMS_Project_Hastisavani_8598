const http = require('http')
const port = 8080;

const server = http.createServer((req, res) => {
    res.write("Hello Nodee.js!!")
})

server.listen(port, () => {
     console.log(`Server port on ${port}`);
})