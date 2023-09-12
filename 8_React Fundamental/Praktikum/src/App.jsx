import Header from './components/Header';
import LOGO from './assets/bootstrap-logo.svg';
import Input from './components/Input';
import SelectOption from './components/SelectOption';
import RadioOption from './components/RadioOption';
import ImageInput from './components/ImageInput';
import Textarea from './components/Textarea';
import Button from './components/Button';

export default function App() {
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
          <h2>Create Product</h2>
          <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <form className="pt-3 px-5 w-75 m-auto d-grid gap-2">
          <h4>Detail Product</h4>
          <Input label="Product Name" type="text" id="product_name" />
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
        </form>
      </main>
    </>
  );
}
