const fs = require('fs')
const express = require('express')
const app = express()
const port = 4000
let bodyParser = require('body-parser')

app.use( bodyParser.json() )

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('/mnt/c/Users/Eleonora/Pictures/photo'));


app.get('/file/:city', (req, res) => {
    const photos = fs.readdirSync(`/mnt/c/Users/Eleonora/Pictures/photo/${req.params.city}`)
    res.json({files: photos.map(photo => req.params.city + '/' + photo)})
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
