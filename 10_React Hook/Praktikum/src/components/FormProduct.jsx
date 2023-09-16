import { useEffect, useState } from 'react';
import Input from './Input';
import SelectOption from './SelectOption';
import ImageInput from './ImageInput';
import RadioOption from './RadioOption';
import Textarea from './Textarea';
import Button from './Button';

export default function FormProduct({ onCreateProduct }) {
  const [formValues, setFormValues] = useState(null);

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formValues);
    setFormValues(null);
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <form className="pt-3 px-5 w-75 m-auto d-grid gap-2" onSubmit={handleSubmit}>
      <h4>Detail Product</h4>
      <Input
        label="Product Name"
        type="text"
        id="product_name"
        value={formValues?.product_name || ''}
        onChange={handleOnChange}
        error={formValues?.product_name?.length > 10 ? 'Product Name tidak boleh melebihi 10 karakter' : ''}
        required
      />
      <SelectOption
        label="Product Category"
        id="product_category"
        options={[
          { label: 'Choose...', value: '' },
          { label: 'Food', value: 'Food' },
          { label: 'Drink', value: 'Drink' },
        ]}
        value={formValues?.product_category || ''}
        onChange={handleOnChange}
        required
      />
      <ImageInput id="product_image" label="Image of Product" />
      <RadioOption
        label="Product Freshness"
        name="product_freshness"
        options={[
          { id: 'brand_new', value: 'Brand New', label: 'Brand New' },
          { id: 'second_hand', value: 'Second Hand', label: 'Second Hand' },
          { id: 'refurbished', value: 'Refurbished', label: 'Refurbished' },
        ]}
        value={formValues?.product_freshness || ''}
        onChange={handleOnChange}
        required
      />

      <Textarea label="Additional Description" id="product_desc" />
      <Input label="Product Price" type="text" id="product_price" placeholder="$ 1" value={formValues?.product_price || ''} onChange={handleOnChange} required />

      <Button type="submit" id="btn_submit">
        Submit
      </Button>
    </form>
  );
}
