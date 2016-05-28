var mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todo-app')

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
})

module.exports.Todo = Todo
