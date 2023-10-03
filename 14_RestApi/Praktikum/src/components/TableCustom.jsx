import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '@mantine/core';

export default function TableCustom() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadData, setIsLoadData] = useState(false);

  const fetchProduct = async () => {
    setIsLoadData(true);
    const { data } = await axios.get(
      'https://651baf2c194f77f2a5aeb481.mockapi.io/api/products'
    );
    setIsLoadData(false);
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const hapusProduct = async (id) => {
    if (confirm('Apakah kamu ingin menghapus product ini ?')) {
      setIsLoading(true);
      await axios.delete(
        `https://651baf2c194f77f2a5aeb481.mockapi.io/api/products/${id}`
      );
      setIsLoading(false);
      fetchProduct();
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button
          className="bg-red-600"
          onClick={() => hapusProduct(rowData.id)}
          isLoading={isLoading}>
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
        loading={isLoadData}
        loadingIcon={
          <Loader style={{ fill: '#fff' }} variant="dots" size="sm" />
        }
        tableStyle={{ minWidth: '50rem' }}>
        <Column body={idBodyTemplate} header="No"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="freshness" header="Freshness"></Column>
        <Column field="price" header="Price"></Column>
        <Column body={actionBodyTemplate} header="Action"></Column>
      </DataTable>
    </div>
  );
}
