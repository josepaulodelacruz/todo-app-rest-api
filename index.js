// Server
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Midleware
const morgan = require('morgan')
app.use(morgan('dev'))

//parse into json object
app.use(express.json())

//Database connections
const configs = require('./config')
mongoose.connect(configs.DB)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err))

//ROUTES
const todoRoutes = require('./routes/TodoRoutes')
app.use('/api/todos', todoRoutes)

// PORT CONNECTION
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
