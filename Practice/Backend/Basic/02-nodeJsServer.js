const http = require('node:http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/menu'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({items:['A','B']}));
    }
    else if(req.method === 'POST' && req.url === '/order'){
        let data = '';
        req.on('data',chunk => data += chunk);
        req.on('end',() => {
            const order = JSON.parse(data);
            res.writeHead(200, {"Content-Type":"application/JSON"});
            res.end(JSON.stringify({status:"Order Received",order}));
        })
    }
    // console.log(typeof res);
    // console.log(typeof req);
})

// console.log(typeof server);

server.listen(3000,()=>{
    console.log("Server is start on 3000");
})