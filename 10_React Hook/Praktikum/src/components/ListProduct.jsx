import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Edit from './Edit';

export default function ListProduct({ dataProducts, onDeleteProduct, onUpdateProduct }) {
  return (
    <div className="my-5 px-5">
      <h3>List Product</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataProducts.map((item, index) => (
            <tr key={index}>
              <td className="overflow-example">{item.id}</td>
              <td>{item.product_name}</td>
              <td>{item.product_category}</td>
              <td>{item.product_freshness}</td>
              <td>{item.product_price}</td>
              <td className="d-flex gap-3">
                <Button variant="danger" onClick={() => onDeleteProduct(item.id)}>
                  Delete
                </Button>
                <Edit onUpdateProduct={onUpdateProduct} dataValues={dataProducts.filter((data) => data.id === item.id)[0]} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
