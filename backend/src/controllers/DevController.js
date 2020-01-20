const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
const { findConnections, sendMessage } = require('../websocket')

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            // função assincrona consumindo api do github, utilizando biblioteca Axios
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
            const { name = login, avatar_url, bio } = apiResponse.data
        
            // transforma string recebida em array
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            // filtrar as conexoes que estão no maximo 10km de distancia
            // e que no novo dev tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )
            console.log(sendSocketMessageTo)
            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }
        
        return response.json(dev)
    },

    async update() {
        // implementar
    },

    async destroy() {
        // implementar
    },
}