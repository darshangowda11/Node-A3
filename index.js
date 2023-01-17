const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res) => {
    fs.readFile("index.html", { encoding: "utf-8" }, (e, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data)
        res.end()
    })
})
server.listen(3000, () => { console.log("this server is at 3000") })