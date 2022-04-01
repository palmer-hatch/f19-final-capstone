const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


let amazonURL = [
    {
     id: 0,
     urlName: "www.youtube.com/c/joerogan",
     youtuberName: "joe rogan"
    },
    {
        id: 1,
        urlName: "https://www.youtube.com/c/AaronJack",
        youtuberName: "Aaron Jack"
    }
 ]

 app.get('/youtubers', (req,res)=>{
     console.log('hit YOUTUBERS')
     res.status(200).send(amazonURL)
 })

 app.get('/youtuber/:name', (req, res) => {
    const { name } = req.params
    const index = amazonURL.findIndex(url => url.urlName.toLowerCase() === name)
    res.status(200).send(amazonURL[index])
})

let id = 2

app.post('/youtuber', (req, res) => {
    let newURL = {...req.body, id}
    amazonURL.unshift(newURL)
    res.status(200).send(amazonURL)
    id++
})


app.get('/youtuber', (req, res) => {
    const { name } = req.query
    
    let filtered = amazonURL.filter(url => {
        if(url.youtuberName === name )  {
            return url.youtuberName

        }
        
        
    })

    res.status(200).send(filtered)
})



 app.listen(80, () =>console.log('wee vibin in the 80s'))