const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

// Colocar o cluster, banco e senha
mongoose.connect('mongodb+srv://devradar:passadm@cluster0-es145.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Necessário para receber dados Json e transformar em objeto
app.use(express.json())

// importando as rotas
app.use(routes)

app.listen(3000)