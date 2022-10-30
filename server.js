const Contenedor = require('./Contenedor')
const contenedor = new Contenedor()

const express = require ('express')
const app = express()

const server = app.listen(8080, ()=> console.log('Server up'))

app.get('/productos', (request, response) => {
    
    contenedor.getAll()
    .then (result=> response.send(result.message))
    .catch(err => console.log (err))

})

app.get('/productoRandom', (request, response) => {
    
    let random  = Math.floor(Math.random()* 3 + 1)
    console.log(random)

    contenedor.getById(random)
    .then (result=> response.send(result.message))
    .catch(err => console.log (err))

})

