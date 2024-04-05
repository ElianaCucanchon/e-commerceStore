import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <li className="navbar navbar-expand-lg">
            <Link to={'/cart'}>
                <Button className="bg-teal">

                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    <span>{getItemQuantity()}</span>

                </Button>
            </Link>


        </li>
    );
}


