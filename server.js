const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.write('This is our home page')
        res.end()
    }else if(req.url == '/about'){
        res.write('This is our about page')
        res.end()
    }else{
        res.write(`
        <h1>
            This page doesn't exist on our server
        </h1>
        <p> Go back to home page </p>
        <a href='/home'>home</a>
        `)
        res.end()
    }
    res.write("Hey there")
    res.end()
})

server.listen(5000)