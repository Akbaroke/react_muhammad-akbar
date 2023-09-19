import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

export default function DetailProduct({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id) || null;

  useEffect(() => {
    if (product == null) {
      navigate('/product');
    }
  }, [navigate, product]);

  return (
    <div>
      <Card style={{ margin: '50px auto', width: '50rem' }}>
        <Card.Body>
          <Card.Title>
            <h3>{product?.product_name}</h3>
          </Card.Title>
          <Card.Text>
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>{product?.id}</td>
                </tr>
                <tr>
                  <td>Product Name</td>
                  <td>{product?.product_name}</td>
                </tr>
                <tr>
                  <td>Product Category</td>
                  <td>{product?.product_category}</td>
                </tr>
                <tr>
                  <td>Product Freshness</td>
                  <td>{product?.product_freshness}</td>
                </tr>
                <tr>
                  <td>Product Price</td>
                  <td>Rp {product?.product_price}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
