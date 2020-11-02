// Import our express module, create a function expression of the express app
var express = require('express');

var app = express();
var port = 3000;

app.use(express.static('/public'));

// Routes
app.get('/',(req,res)=>{
    console.log(`Request made : ${req.url}`);
    res.sendFile(__dirname + '/index.html');
})


// Have our server listen
app.listen(port,()=>{
    console.log(`Server started on 127.0.0.1:${port}`);
})