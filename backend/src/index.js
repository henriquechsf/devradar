const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// Conexão com Mongo, cluster, banco e senha
mongoose.connect('mongodb+srv://devradar:passadm@cluster0-es145.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// liberando o acesso da api para aplicações externas (React)
app.use(cors())

// Necessário para receber dados Json e transformar em objeto
app.use(express.json())

// importando as rotas
app.use(routes)

app.listen(3333)