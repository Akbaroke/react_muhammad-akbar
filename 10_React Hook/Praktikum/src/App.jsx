import Header from './components/Header';
import LOGO from './assets/bootstrap-logo.svg';
import Button from './components/Button';
import article from './data/artikel';
import { useEffect, useState } from 'react';
import ToggleButton from './components/ToggleButton';
import FormProduct from './components/FormProduct';
import ListProduct from './components/ListProduct';
import { v4 as uuidv4 } from 'uuid';

const initialValue = [
  {
    id: uuidv4(),
    product_name: 'Product 1',
    product_category: 'Food',
    product_freshness: 'Brand New',
    product_price: 10000,
  },
];

export default function App() {
  const [isChecked, setIsChecked] = useState(true);
  const [products, setProducts] = useState(initialValue);

  const handleRandomNumber = () => {
    console.log(Math.random());
  };

  const tambahProduct = (newProduct) => {
    console.log(newProduct);
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

  useEffect(() => {
    alert('Welcome');
  }, []);

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
        <div className="px-5 w-75 m-auto">
          <Button type="button" onClick={handleRandomNumber}>
            Random Number in Console
          </Button>
        </div>
      </main>
      <ListProduct dataProducts={products} onDeleteProduct={hapusProduct} onUpdateProduct={editProduct} />
    </>
  );
}
