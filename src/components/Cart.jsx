import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useCarritoContext } from '../context/CartContext'
import { ItemList } from "./ItemList";

//AQUI RENDERIZAMOS, VAMOS A MOSTRAR LOS PRODUCTOS QUE EXISTAN EN EL CARRO. 
//Rendering condicional
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {//esto es una consulta
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <Button variant="success">
                            <Link to={'/'} color="white">
                                Volver al Inicio
                            </Link>
                        </Button>
                    </>
                    :

                    <div>
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div>
                            <p>Resumen de la Compra: {totalPrice()} </p>
                            <Button variant="success" onClick={emptyCart}>
                                Vaciar Carrito
                            </Button>

                            <Button variant="success">
                            <Link to={'/'} >
                                Continuar Comprando
                            </Link>
                        </Button> <Button variant="success">
                            <Link to={'/checkout'} >
                                Finalizar Compra
                            </Link>
                        </Button>
                        </div>
                    </div>


            }
        </>
    )
}