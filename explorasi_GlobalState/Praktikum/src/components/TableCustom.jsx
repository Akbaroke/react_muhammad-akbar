import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProdcuts } from '../redux/slices/usersSlice';

export default function TableCustom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const hapusProduct = (id) => {
    confirm('Apakah kamu ingin menghapus product ini ?') &&
      dispatch(deleteProdcuts({ id }));
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button className="bg-red-600" onClick={() => hapusProduct(rowData.id)}>
          Delete
        </Button>
        <Button onClick={() => navigate(`/${rowData.id}`)}>Edit</Button>
      </div>
    );
  };

  const idBodyTemplate = (rowData) => {
    return (
      <Link to={`/${rowData.id}`} className="hover:underline">
        {rowData.id}
      </Link>
    );
  };

  return (
    <div>
      <DataTable
        value={products}
        showGridlines
        tableStyle={{ minWidth: '50rem' }}>
        <Column body={idBodyTemplate} header="No"></Column>
        <Column field="product_name" header="Name"></Column>
        <Column field="product_category" header="Category"></Column>
        <Column field="product_freshness" header="Freshness"></Column>
        <Column field="product_price" header="Price"></Column>
        <Column body={actionBodyTemplate} header="Action"></Column>
      </DataTable>
    </div>
  );
}
