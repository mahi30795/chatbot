const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')
const PORT = process.env.PORT || 5000

/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send("Hi I'm a chatbot"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/
const app = express()



app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


//Routes

app.get('/', function (req, res) {
    res.send("Hi I'm a chatbot")
})

// Facebook

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === "m@h130795") {
        res.send(req.query['hub.challenge'])
    }
    res.send("Wrong token")
})

app.listen(PORT , function () {
    console.log("running: port")
})