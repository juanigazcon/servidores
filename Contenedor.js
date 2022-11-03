const fs = require('fs');
const file = './products.txt'



class Contenedor {

    toReadFile(fileName){
        let data = fs.readFileSync(fileName, 'utf-8');
        let products = JSON.parse(data)
        return products
    } 

    toWriteFile(fileName,text){
        fs.promises.writeFile(fileName, JSON.stringify(text, null, 2))
    }


    save = async (product) => {
        //valido que el producto a guardar tengo title y price, campos mandatorios
        if(!product.title || !product.price){
            return {status: "Error", message:"Missing fields to insert new product"}
        }
        try{
            if(fs.existsSync(file)){ 
                let products = this.toReadFile(file);

                //valido que haya items en el archivo, porque si está creado el archivo sin ítems coloco id = 1
                if(products.length>0){

                let id= products[products.length-1].id    
                product.id = id+1;
                products.push(product);
                this.toWriteFile(file, products)
                
                return{status: "Success", message:"Product was created"}                

                } 
            } 

                product.id=1
                this.toWriteFile(file,[product])

                return{status: "Success", message:"Product was created"}
            

        } catch(err){

            return{status: "Error", message: err.message}
        }
    }



    deleteById = async (id) => {

        if((!id) || isNaN(id)) return {status: "Error", message: "Numeric ID is required"}

        try{    
        if(fs.existsSync(file)){

            let productToDelete = this.toReadFile(file).some(product => product.id ===id)

            if(productToDelete){
              let  newProducts = products.filter(product => product.id !== id)
              this.toWriteFile(file, newProducts)
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
            if(this.toReadFile(file).length>0){
            let products= []
            this.toWriteFile(file, products)
            return {status:"Success", message: "Products have been successfully deleted"}
            } else return {status: "Error", message:"There are no products to delete"}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }



    getById = async(id) => {

        if((!id) || (isNaN(id))) return {status: "Error", message: "Numeric ID is required"}

        try{
        if(fs.existsSync(file)){

            let selectedProduct = this.toReadFile(file).find(product => product.id === id)

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

            let itemList = this.toReadFile(file)

            return {status:"Success", message: itemList}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
        } catch(err){
            return{status: "Error", message: err.message}
        } 
    }



}

module.exports = Contenedor