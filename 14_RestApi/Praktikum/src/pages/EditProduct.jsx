import Input from '../components/Input';
import { isNotEmpty, useForm } from '@mantine/form';
import InputRadio from '../components/InputRadio';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from '@mantine/core';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadData, setIsLoadData] = useState(false);

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      category: '',
      freshness: '',
      price: '',
    },
    validate: {
      name: (value) => {
        if (/[@#{}]/.test(value)) {
          return 'Product name must not contain symbols.';
        }
        if (value.length > 25) {
          return 'Product name must not exceed 25 characters.';
        }
        if (value.length === 0) {
          return 'Please enter a valid Product name.';
        }
        return null;
      },
      category: isNotEmpty('Please enter a valid Product Category.'),
      freshness: isNotEmpty('Please enter a valid Product Freshness.'),
      price: isNotEmpty('Please enter a valid Product Price.'),
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.put(
      `https://651baf2c194f77f2a5aeb481.mockapi.io/api/products/${id}`,
      form.values
    );
    setIsLoading(false);
    navigate('/');
    form.reset();
  };

  const fetchProduct = async () => {
    setIsLoadData(true);
    const { data } = await axios.get(
      `https://651baf2c194f77f2a5aeb481.mockapi.io/api/products/${id}`
    );
    form.setValues(data);
    setIsLoadData(false);
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="max-w-[400px] m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200">
        <h1 className="text-xl font-bold">Edit Product</h1>
      </div>
      <div className="p-5">
        {isLoadData ? (
          <Loader style={{ fill: '#000' }} variant="dots" size="sm" m="auto" />
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              label="Product Name"
              id="name"
              type="text"
              value={form.values.name}
              errorLabel={form.errors.name}
              onChange={(e) => form.setFieldValue('name', e)}
            />
            <Input
              label="Product Category"
              id="category"
              type="select"
              value={form.values.category}
              errorLabel={form.errors.category}
              onChange={(e) => form.setFieldValue('category', e)}
              datas={['Food', 'Drink']}
            />
            <InputRadio
              label="Product Freshness"
              id="freshness"
              value={form.values.freshness}
              onChange={(e) => form.setFieldValue('freshness', e)}
              datas={['Brand New', 'Second Hand', 'Refurbished']}
            />
            <Input
              label="Product Price"
              id="price"
              type="number"
              value={form.values.price}
              errorLabel={form.errors.price}
              onChange={(e) => form.setFieldValue('price', e)}
              placeholder="$"
            />
            <Button
              className="h-[40px] w-full mt-5"
              type="submit"
              isLoading={isLoading}
              isDisabled={!form.isValid()}>
              Save
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
