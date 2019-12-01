const express = require('express')
const router = express.Router()
const repository = require('../repositories/repository')
//dummy data
const todos = [
    { id: 1, name: 'hello' },
    { id: 2, name: 'There' },
    { id: 3, name: 'jose' }
]

// setup routes
router.get('/', (req, res) => {
    repository.findAll().then((todo) => {
        res.send(todo)
    })
    .catch((error) => console.log(error))
})
//Add Todo
router.post('/', (req, res) => {
    const { name } = req.body
    repository.create(name).then((todo) => {
        res.send(todo)
    })
    .catch((error) => console.log(error))
})

//delete todo
router.delete('/:id', (req, res) => {
    const id = req.params.id
    repository.deleteById(id).then((todo) => {
        res.send(todo)
    })
    .catch((err) =>  console.log(err))
})

//update id
router.put('/:id', (req, res) => {
    const { id } = req.params
    const todo = { name: req.body.name, done: req.body.done }
    repository.updateById(id, todo).then((todo) => {
        res.status(200).json([])
        .catch((error) => console.log(error))
    })
})



module.exports = router
