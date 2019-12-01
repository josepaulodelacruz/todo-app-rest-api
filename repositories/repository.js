const Todo = require('../models/Todo')

class TodoRepository {
    constructor(model) {
        this.model = model
    }

    //create new Todo
    create(name) {
        const newTodo = { name, done: false }
        const todo = new this.model(newTodo)

        return todo.save()
    }

    //find the list
    findAll() {
        return this.model.find()
    }

    //update Todo
    updateById(id, object) {
        const query = { _id: id }
        return this.model.findOneAndUpdate(query, {
            $set: {
                name: object.name,
                done: object.done
            }
        })
    }

    //delete todo
    deleteById(id) {
        return this.model.findByIdAndDelete(id)
    }

}

module.exports = new TodoRepository(Todo)
