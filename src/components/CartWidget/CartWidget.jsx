import { useState } from "react";

export const CartWidget = () => {
    const [numero, setNumero] = useState (0)
    return (
        <>
            <i className="bi bi-cart3">
            <p>{numero}</p>
            </i>
            

        </>
    );
}

export default CartWidget;
