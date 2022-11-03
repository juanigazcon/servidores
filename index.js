const Contenedor = require('./Contenedor')
const contenedor = new Contenedor()
const file = './products.txt'

torta1 =  {
    "title": "Frozen",
    "price": 4500,
    "thumbnail": "https://juanigazcon.github.io/entrega/Images/Productos/cheesecake.jpg",
  }

 contenedor.save(torta1)
.then (result=> console.log(result))
.catch(err => console.log (err)) 
 
/*
contenedor.getAll()
.then (result=> console.log(result))
.catch(err => console.log (err)) 

/* contenedor.toReadFile(file)
.then (result=> console.log(result))
.catch(err => console.log (err))  */


/* contenedor.deleteAll()
.then (result=> console.log(result))
.catch(err => console.log (err)) */


/*
contenedor.getAll()
.then (result=> console.log(result))
.catch(err => console.log (err))



contenedor.save(torta2)
.then (result=> console.log(result))
.catch(err => console.log (err))


contenedor.save(torta3)
.then (result=> console.log(result))
.catch(err => console.log (err))




contenedor.getById(8)
.then (result=> console.log(result))
.catch(err => console.log (err))




contenedor.deleteById(1)
.then (result=> console.log(result))
.catch(err => console.log (err))

contenedor.deleteById(4)
.then (result=> console.log(result))
.catch(err => console.log (err))

contenedor.deleteAll()
.then (result=> console.log(result))
.catch(err => console.log (err)) 
 */




