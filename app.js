const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to the home page')
        return
    }
    if(req.url === '/about-us'){
        res.end("Here's some information about our company")
        return
    }
    return res.end(`OOPS! That page does not exist!, <a href="/">Home</a> `)
})

server.listen(5000)