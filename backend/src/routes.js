const { Router } = require('express')
const DevController = require('./controllers/DevController')

const routes = Router()

// index -> listar registros
// show -> mostrar único registro
// store -> criar registro
// update -> alterar registro
// destroy -> excluir registro

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

module.exports = routes