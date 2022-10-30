const fs = require('fs');
const file = './products.txt'

class Contenedor {

    save = async (product) => {
        if(!product.title || !product.price){
            return {status: "Error", message:"Missing fields to insert new product"}
        }
        try{
            if(fs.existsSync(file)){
                let data = await fs.promises.readFile(file, 'utf-8');
                let products = JSON.parse(data)

                //valido que haya items en el archivo, porque si está creado el archivo sin ítems coloco id = 1
                if(products.length>0){

                let id= products[products.length-1].id    
                product.id = id+1;
                products.push(product);

                await fs.promises.writeFile(file, JSON.stringify(products, null, 2))
                return {status: "Success", Message: "New product has been added"}

                }  else {
                    product.id=1
                    await fs.promises.writeFile(file, JSON.stringify([product], null, 2))
                    return{status: "Success", message:"Product was created"}
                }
            } else {
                product.id=1
                await fs.promises.writeFile(file, JSON.stringify([product], null, 2))
                return{status: "Success", message:"Product was created"}
            }  
        } catch(err){
            return{status: "Error", message: err.message}
        }
    }


    
    getById = async(id) => {

        if(!id) return {status: "Error", message: "ID is required"}

        try{
        if(fs.existsSync(file)){

            let data = await fs.promises.readFile(file, 'utf-8')

            let products = JSON.parse(data)
            let selectedProduct = products.find(product => product.id === id)

            if(selectedProduct){
            return {status:"Success", message: selectedProduct}
            } else {
            return {status: "Error", message:"Product doesn´t exist"}
            }
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }

        } catch(err){
            return{status: "Error", message: err.message}
        }
    }

    getAll = async () => {

        try{    
        if(fs.existsSync(file)){

            let data = await fs.promises.readFile(file, 'utf-8')
            let products = JSON.parse(data)
            return {status:"Success", message: products}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }


    traerTodos = async () => {

        try{    
        if(fs.existsSync(file)){

            let data = await fs.promises.readFile(file, 'utf-8')
            let products = JSON.parse(data)
            return {status:"Success", message: products}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }


    deleteById = async (id) => {

        if(!id) return {status: "Error", message: "ID is required"}

        try{    
        if(fs.existsSync(file)){

            let data = await fs.promises.readFile(file, 'utf-8')
            let products = JSON.parse(data)
            let productToDelete = products.some(product => product.id ===id)

            if(productToDelete){
              let  newProducts = products.filter(product => product.id !== id)
              await fs.promises.writeFile(file, JSON.stringify(newProducts, null, 2))
              return {status:"Success", message: "Product has been successfully deleted"}
            } else {
                return {status:"Error", message: "Product was not found"}
            }

        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }

    deleteAll = async () => {

        try{    
        if(fs.existsSync(file)){

            let data = await fs.promises.readFile(file, 'utf-8')
            let products = JSON.parse(data)

            if(products.length>0){

            products= []
            await fs.promises.writeFile(file, JSON.stringify(products, null, 2))
            return {status:"Success", message: "Products have been successfully deleted"}

            } else return {status: "Error", message:"There are no products to delete"}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }
   


}

module.exports = Contenedor