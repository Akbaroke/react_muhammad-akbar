import { Image } from 'primereact/image';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

export default function TableCustom({ products, setProducts }) {
  const navigate = useNavigate();

  const hapusProduct = (id) => {
    confirm('Apakah kamu ingin menghapus product ini ?') && setProducts((oldData) => oldData.filter((item) => item.id !== id));
  };

  const imageBodyTemplate = (rowData) => {
    return <Image src={URL.createObjectURL(rowData.product_image)} alt="Image" preview className="rounded-lg overflow-hidden w-24 h-24 m-auto" />;
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
      <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column body={idBodyTemplate} header="No"></Column>
        <Column field="product_name" header="Name"></Column>
        <Column field="product_category" header="Category"></Column>
        <Column body={imageBodyTemplate} header="Image"></Column>
        <Column field="product_freshness" header="Freshness"></Column>
        <Column field="product_price" header="Price"></Column>
        <Column body={actionBodyTemplate} header="Action"></Column>
      </DataTable>
    </div>
  );
}
