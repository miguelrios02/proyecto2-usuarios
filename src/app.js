const express = require('express')
const app = express()
const userRouter = require('./users/users.router')
app.use(express.json())

app.get('/', (req,res) =>{
    res.status(200).json({
        message:'server ok!'
    })
})

app.use('/',userRouter)
module.exports = app
