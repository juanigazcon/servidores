const Contenedor = require('./Contenedor')
const contenedor = new Contenedor()
const express = require ('express')
const app = express()

const file = './products.txt'

const server = app.listen(8080, ()=> console.log('Server up'))

app.get('/productos', (request, response) => {
    
    contenedor.getAll()
    .then (result=> response.send(result.message))
    .catch(err => console.log (err))

})

app.get('/productoRandom', (request, response) => {
    
    let longitud = contenedor.toReadFile(file).length

    let random  = Math.floor(Math.random()* (longitud) + 1)

    contenedor.getById(random)
    .then (result=> response.send(result.message))
    .catch(err => console.log (err))

})

