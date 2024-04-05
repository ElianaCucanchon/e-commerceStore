// Este itemList recibe un array de productos, y los voy a mapear. Los transformo de JS a un jsx, para hacer eso tenemos un componente, el de aqui, q importa una plantilla y la transforma, y por eso es un mapeo

import { Item } from "./Item"
import { ItemCart } from './ItemCart';

export const ItemList = ({ products, plantilla }) => {
  return (
    <>
          {
            plantilla === 'Item' ?
              products.map(prod => <Item key={prod.id} product={prod} />)
              :
              products.map(prod => <ItemCart key={prod.id} product={prod} />)


          }

 
    </>
  )
}

