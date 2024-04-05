import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Button from 'react-bootstrap/Button';
import { useCounter } from '../hooks/useCounter'
import { Link } from 'react-router-dom';
import { useCarritoContext } from "../context/CartContext"
import { toast } from 'react-toastify'

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado correctamente `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnclick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })

    }
    return (
        <Card style={{ width: '18rem', }}>
            <Card.Img xs={12} md={8} src={`${item.img}`} alt={`Imagen de ${item.title}`} />
            <Card.Body className="classCenter">
                <Card.Title className="text-2x1 font-bold mb-2">{item.name}</Card.Title>
                <CardText>
                    Size: {item.size}<br />
                    Stock: {item.stock}<br />
                    Precio: {item.price}
                </CardText>
                <Card.Body className="classCenter">
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

                        </div>
                    </div>
                </Card.Body>
                <Button variant="success" onClick={handleAddToCart}>Agregar a Carrito</Button>
            </Card.Body>

            <Link to={'/'}>
                <Button variant="success" className="classCenter">Cerrar</Button>
            </Link>
        </Card>
    );
}
