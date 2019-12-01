const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
    name: String,
    done: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
