import Input from '../components/Input';
import { isNotEmpty, useForm } from '@mantine/form';
import InputRadio from '../components/InputRadio';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function CreateProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    await axios.post(
      'https://651baf2c194f77f2a5aeb481.mockapi.io/api/products',
      form.values
    );
    setIsLoading(false);
    navigate('/');
    form.reset();
  };

  return (
    <div className="max-w-[400px] m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200">
        <h1 className="text-xl font-bold">Create Product</h1>
      </div>
      <div className="p-5">
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
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
