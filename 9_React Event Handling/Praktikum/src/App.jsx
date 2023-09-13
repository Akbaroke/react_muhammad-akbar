import Header from './components/Header';
import LOGO from './assets/bootstrap-logo.svg';
import Input from './components/Input';
import SelectOption from './components/SelectOption';
import RadioOption from './components/RadioOption';
import ImageInput from './components/ImageInput';
import Textarea from './components/Textarea';
import Button from './components/Button';
import article from './data/artikel';
import { useState } from 'react';
import ToggleButton from './components/ToggleButton';

export default function App() {
  const [formValues, setFormValues] = useState();
  const [isChecked, setIsChecked] = useState(true);

  const handleRandomNumber = () => {
    console.log(Math.random());
  };

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
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
        <form className="pt-3 px-5 w-75 m-auto d-grid gap-2">
          <h4>Detail Product</h4>
          <Input label="Product Name" type="text" id="product_name" onChange={handleOnChange} error={formValues?.product_name?.length > 10 ? 'Product Name tidak boleh melebihi 10 karakter' : ''} />
          <SelectOption
            label="Product Category"
            id="product_category"
            options={[
              { label: 'Choose...', value: '' },
              { label: 'Food', value: 1 },
              { label: 'Drink', value: 2 },
            ]}
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
          />
          <Textarea label="Additional Description" id="product_desc" />
          <Input label="Product Price" type="text" id="product_price" placeholder="$ 1" />

          <Button type="submit" id="btn_submit">
            Submit
          </Button>
          <Button type="button" onClick={handleRandomNumber}>
            Random Number in Console
          </Button>
        </form>
      </main>
    </>
  );
}
