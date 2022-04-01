const express = require('express')
const app = express()
const port = 3000

const express = require('express')
const https = require('https')
const http = require('http')
const app = express()

http.createServer(app).listen(80)
https.createServer(app).listen(443)



const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
})

app.get('/creators', async (req, res) => {
        const creators = [
        {name: 'Code Drip', img: "https://"},
        {name: "Dave Lee", img: "https://"},
        {name: "MKBHD", img: 'https://'},
    ]
    res.send(creators)
})

app.post('/creators', async (req, res) => {
    console.log(req.body)
    const channelData = await scrapers.scrapeChannel(req.body.channelURL)

  res.send('success')
})



app.listen = function () {
    const server = http.createServer(this)
    return server.listen.apply(server, arguments)
  }


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })