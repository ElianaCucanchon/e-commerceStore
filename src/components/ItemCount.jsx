import {useCounter} from "../hooks/useCounter/"

export const ItemCount = () => {
    const {count, increment, decrement, reset} = useCounter(1,10,1) //minimo,maximo,step
    const handleAddToCart =() => {
        console.log ("Producto agrgado al carrito")
    }
    
    return (
        <div>
            <div>
                <button onClick={decrement}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={increment}>
                    +
                </button>
                <button onClick={reset}>
                    Reset
                </button>
                <button onClick={handleAddToCart}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
       
    )
}

