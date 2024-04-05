import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Item = ({ product }) => {
  return (
    <div style={{ height: '30rem', display: 'flex' }}>
      <div className="container" style={{ width: '14rem' }} >
        <div className="col-md-6">
          <div className="card" style={{ width: '16rem' }}>
            <Image src={`${product.img}`}
              className="card-img-top"
              alt={`Imagen de ${product.name}`}
              style={{ width: '100%', height: '16rem', objectFit: 'contain' }} />
            <h2 className="card-title my-3">{product.name}</h2>
            <p className="card-text"> Size {product.size}</p>
            <div className="d-flex justify-content-between">
              <span className="fs-2"> Precio ${product.price}</span>
            </div>


            <Link to={`/product/${product.id}`}>

              <Button variant="success">Ver Producto</Button>

            </Link>

          </div>
        </div>
      </div>
    </div>






  )

}


