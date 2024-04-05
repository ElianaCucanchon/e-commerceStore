import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import Container from 'react-bootstrap/Container';
import { Item } from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProducts } from '../firebase/firebase';



export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { cid } = useParams();

  useEffect(() => {

    /* fetch("../data/productos.json")
      .then((response) => response.json()) */

    getProducts()
      .then((prods) => {
        const productos = prods.filter(prod => prod.stock > 0)
        if (cid) {
          const productosFiltrados = productos.filter(prod => prod.category == cid);
          setProducts(productosFiltrados);
        } else {
          setProducts(productos);
        }
      })
      .catch((error) => console.log(error));
  }, [cid]);

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id} >
            <ItemList products={[product]} plantilla="Item" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};


