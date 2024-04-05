import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrderCompra, getProduct, getOrdenCompra, updateProduct } from '../firebase/firebase.js';

export const Checkout = () => {
    const formRef = useRef()
    const navitage = useNavigate() //Devuelve la locacion actual de mi componente (la ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML  a un objeto iteractor
        const cliente = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple





        //Modificar Stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { //Si existe stock suficiente para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD.stock)



                } else {
                    toast.info(`El producto con el nombre: ${prod.nombre} no puede continuar con la compra ya que no tiene stock suficiente `, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnclick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })

                    aux.filter(prod => prod.id != prodBDD.id)  //Elimino el producto del carrito al tener stock suficiente
                }

            })
        })

        //General la orden de compra

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))


        //Generar mi orden de compra.. se envia todos los datos del cliente

        createOrderCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-CO', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de ${totalPrice()}. En breve nos contactaremos para realizar el envio`,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnclick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"


                    })

                emptyCart()
                e.target.reset()
                navitage('/')

            })
            .catch(e => {
                toast.error(`Error al generar la Orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnclick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

            })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                <>
                <h2>Para finaliza compras debe tener productos en el carrito</h2>
                <Link to={[]}>
                <Button variant="success">Volver al Inicio</Button>
                </Link>
                </>
                :

                    <div className="Contenedor">

                        <Form action="" ref={formRef} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName" >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="nombre" placeholder="Ingrese su Nombre" name="nombre" />
                                <Form.Text className="text-muted">
                                    Por favor ingrese los dos nombres
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName" >
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="nombre" placeholder="Ingrese su apellido" name="apellido" />
                                <Form.Text className="text-muted">
                                </Form.Text>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAdress" >
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control type="dirccion" placeholder="direccion" name="direccion" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone" >
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="telefono" placeholder="telefono" name="telefono" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email" name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Finalizar compra
                            </Button>
                        </Form>

                    </div>
             }
        </>

    )
}