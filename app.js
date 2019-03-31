const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send("Hello World!!!");
})

app.get('/api/courses', (req,res)=> {
    res.send([1,2,3]);
})

//Creating an env variable to use a port instead of using hard coded port 
const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Listening on port ${port}... `) )




/* Basic Server


const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req,res) => {
    if(req.url === '/'){
       // res.statusCode = 200;
    //res.setHeader('Content-type' , 'text/plain');
    res.write("Hello World");
    res.end('Simple Node.js Server');
    }
    
    

    if(req.url === '/api/courses'){
        var obj = { name: "John", age: 30, city: "NY" };

        res.write("Hello JSON ");
        res.write(JSON.stringify(obj));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');*/