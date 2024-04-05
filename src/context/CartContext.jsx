import { useState, createContext, useContext } from "react";

const CarritoContext = createContext()  //Creando el contexto (por el momento vacio)

export const useCarritoContext = () => useContext(CarritoContext) //Funcion para consultr mi contenido

//Proveedor de datos del carrito

export const CarritoProvider = (props) => {//Forma de proveer el contexto, puede recibir props
    // Un carrtito tiene que ofrecer?
    //=Agregar  productos al carrito- Eliminar producto 
    //-Vaciar carrito - Optener cantidad (subtotales) 
    //-Optener preio total (suma de subtotales)


    const [carrito, setCarrito] = useState([])

    //-BUSCAR PRODUCTO

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)// V o F, si existe o no el producto en el carrito
    }

    //AGREGAR UN PRODUCTO

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)

        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            /* const aux =[...carrito]
            aux.push(newItem)
            setCarrito(aux) */

            setCarrito([...carrito, newItem]) //Guardo en el carrito el nuevo producto

        }
    }



    //REMOVE ITEM

    const removeItem = (id) => {
        /* const aux =[...carrito]
        const indice = aux.findIndex(pro => prod.id === id)
    
        if (indice != -1) {
            setCarrito(aux.splice(indice, 1))
        } */

        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    // Vaciar Carrito. ELIMINAR TODOS LOS PRODUCTOS DE ARRAY. 

    const emptyCart = () => {
        setCarrito([])
    }
    const updateItem = (id, newQuantity) => {
        const indice = carrito.findIndex (prod => prod.id === id)
        const aux = carrito
        aux[indice].quantity = newQuantity
       
        setCarrito([...aux])
    }

    //Obtener cantidad d eproductos. CANTIDAD DE PRODUCTOS EN EL CARRITO. 

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Optener precio total del carrito
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }
    console.log (carrito)
    return (
        <CarritoContext.Provider value={{
            carrito, addItem, removeItem, updateItem, emptyCart,
            getItemQuantity, totalPrice
        }}>
            {props.children}
        </CarritoContext.Provider>
    )


}