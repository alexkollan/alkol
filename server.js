const express = require('express')
const app = express()

app.use( express.static( `${__dirname}/build` ) );

app.listen(5000, () => console.log('Example app listening on port 3000!'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('We have 1 visitor!');
    
})
