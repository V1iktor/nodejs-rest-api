const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const dbConfig = require('./db/database')


mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err)
        console.error("Error with db connection: ", err)
    else
        console.log("Connected to the mongodb") 
})


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const userRoute = require('./routes/product.route')
app.use('/api', userRoute)


const port = process.env.PORT || 8080


const server = app.listen(port, () => {
    console.log(`Listen on ${port}`)
})


app.get('*', function(req, res){
    res.status(404).send('404 error')
})


app.use((err, req, res, next) => {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})


app.use(express.static(path.join(__dirname, 'dist')))