const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Colocar o cluster, banco e senha
mongoose.connect('mongodb+srv://devradar:passadm@cluster0-es145.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())

// Métodos hhtp -> GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params (GET) -> req.query / ?param=valor (Filtros, ordenação, paginação, ...)
// Route Params (PUT, DELETE) -> req.params / /user/1 (Identificar um recurso na alteração ou remoção)
// Bddy (POST, PUT) -> req.body (Dados para criação ou alteração de um registro)

// Mongo DB (banco não relacional)

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello Node' })
})

app.listen(3000)