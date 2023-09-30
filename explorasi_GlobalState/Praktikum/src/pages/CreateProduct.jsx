import Input from '../components/Input';
import { isNotEmpty, useForm } from '@mantine/form';
import InputRadio from '../components/InputRadio';
import TextareaCustom from '../components/Textarea';
import Button from '../components/Button';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrUpdateProducts } from '../redux/slices/productSlice';

export default function CreateProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      product_name: '',
      product_category: '',
      product_freshness: '',
      additional_description: '',
      product_price: '',
    },
    validate: {
      product_name: (value) => {
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
      product_category: isNotEmpty('Please enter a valid Product Category.'),
      product_freshness: isNotEmpty('Please enter a valid Product Freshness.'),
      additional_description: isNotEmpty(
        'Please enter a valid Additional Description.'
      ),
      product_price: isNotEmpty('Please enter a valid Product Price.'),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setOrUpdateProducts({
        id: uuidv4(),
        ...form.values,
      })
    );
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
            id="product_name"
            type="text"
            value={form.values.product_name}
            errorLabel={form.errors.product_name}
            onChange={(e) => form.setFieldValue('product_name', e)}
          />
          <Input
            label="Product Category"
            id="product_category"
            type="select"
            value={form.values.product_category}
            errorLabel={form.errors.product_category}
            onChange={(e) => form.setFieldValue('product_category', e)}
            datas={['Food', 'Drink']}
          />
          <InputRadio
            label="Product Freshness"
            id="product_freshness"
            value={form.values.product_freshness}
            onChange={(e) => form.setFieldValue('product_freshness', e)}
            datas={['Brand New', 'Second Hand', 'Refurbished']}
          />
          <TextareaCustom
            label="Additional Description"
            id="additional_description"
            type="text"
            value={form.values.additional_description}
            errorLabel={form.errors.additional_description}
            onChange={(e) => form.setFieldValue('additional_description', e)}
          />
          <Input
            label="Product Price"
            id="product_price"
            type="number"
            value={form.values.product_price}
            errorLabel={form.errors.product_price}
            onChange={(e) => form.setFieldValue('product_price', e)}
            placeholder="$"
          />
          <Button
            className="h-[40px] w-full mt-5"
            type="submit"
            isDisabled={!form.isValid()}>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
