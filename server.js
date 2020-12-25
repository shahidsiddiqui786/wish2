const express = require('express')
const app = express()

const endpoint = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', __dirname + '/views')


app.get('/',(req,res) => {
    res.render('index')
})


app.listen(endpoint,() => console.log("cool, we started") )