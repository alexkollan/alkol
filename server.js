var express = require('express')
var app = express()

var server_port = process.env.PORT || 3000;


app.use( express.static( `${__dirname}/build` ) );

app.listen(server_port, function(){
    console.log( "Listening on  port " + server_port )
})


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})
