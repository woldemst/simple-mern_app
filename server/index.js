const express = require('express')
const app = express()
const UserModel = require('./models/Models')
const mongoose = require('mongoose')
const cors = require('cors')

//to awoid errors 
app.use(express.json())
app.use(cors())
 
mongoose.connect('mongodb+srv://woldemst:****.@secondcluster.fawkohp.mongodb.net/mern?retryWrites=true&w=majority')

app.get('/getTasks', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post('/createUser', async (req, res)=>{
    const user = req.body
    const newUser =  new UserModel(user)

    await newUser.save()

    res.json(user)
})

app.listen(3001, ()=>console.log('works '))




