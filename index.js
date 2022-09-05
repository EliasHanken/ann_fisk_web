var express = require('express');
var http = require('http');
const app = express();
const port = 5005;

app.use(express.static('./'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(port, ()=>{
    console.log(`Now listening on port ${port}`)
});



