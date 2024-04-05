import React from 'react';
import { useCarritoContext } from '../context/CartContext'
import { useCounter } from '../hooks/useCounter.js'
import { Cart } from './Cart.jsx';
import Card from 'react-bootstrap/Card';

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
    return (
        
        <Card style={{ width: '18rem', }}>
            
                <Card.Img xs={12} md={8} src={`${product.img}`} alt={`Imagen de ${product.title} `} />
          
            <div>
                <h3>{product.title} </h3>
            </div>
            <div>
                
                <button onClick={() => {
                    
                    decrement()
                    updateItem(product.id,count)
                   
                    
                    }}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={() =>{ 
                    
                    increment()
                    updateItem(product.id,count)
                    increment()
                   
                    
                    }}>
                    +
                </button>
            </div>
            <div>
            <p> Subtotal: ${product.price * count} </p>

            </div>
            <div>
                <button onClick={() => removeItem(product.id)}> Eliminar </button>
            </div>
        </Card>


    )
}


