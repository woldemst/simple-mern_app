const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
})

const TaskSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    startDate: {type: String, required: true},
    dueDate: {type: String, required: true},
    importance: {type: String, required: true},
})

const UserModel = mongoose.model('users', UserSchema)
const TaskModel = mongoose.model('tasks', TaskSchema)
module.exports = {
    UserModel, TaskModel
}