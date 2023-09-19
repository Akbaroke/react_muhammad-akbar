import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import FormProduct from '../components/FormProduct';
import article from '../data/artikel';
import { useState } from 'react';
import LOGO from '../assets/bootstrap-logo.svg';
import { v4 as uuidv4 } from 'uuid';
import ListProduct from '../components/ListProduct';

export default function CreateProduct({ products, setProducts }) {
  const [isChecked, setIsChecked] = useState(true);

  const tambahProduct = (newProduct) => {
    setProducts((oldData) => [
      ...oldData,
      {
        id: uuidv4(),
        ...newProduct,
      },
    ]);
  };

  const editProduct = (id, updatedProduct) => {
    setProducts((oldData) => {
      return oldData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...updatedProduct,
          };
        }
        return item;
      });
    });
  };

  const hapusProduct = (id) => {
    confirm('Apakah kamu ingin menghapus product ini ?') && setProducts((oldData) => oldData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header
        brandText="Simple header"
        buttons={[
          { type: 'btn-primary', text: 'Home' },
          { type: 'btn-light', text: 'Features' },
          { type: 'btn-light', text: 'Pricing' },
          { type: 'btn-light', text: 'FAQs' },
          { type: 'btn-light', text: 'About' },
        ]}
      />
      <main className="container p-5">
        <div className="d-flex flex-column align-items-center text-center gap-2">
          <img src={LOGO} alt="Bootstrap" width={71} height={57} />
          <h2>{isChecked ? article.title.en : article.title.id}</h2>
          <p>{isChecked ? article.description.en : article.description.id}</p>
          <ToggleButton isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
        <FormProduct onCreateProduct={tambahProduct} />
      </main>
      <ListProduct dataProducts={products} onDeleteProduct={hapusProduct} onUpdateProduct={editProduct} />
    </>
  );
}
