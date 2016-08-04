var mongoose = require('mongoose')
var configValues = require('./config')
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds139715.mlab.com:39715/lewhatsnodetodo')

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
})

module.exports.Todo = Todo
