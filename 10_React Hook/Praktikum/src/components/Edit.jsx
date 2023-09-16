import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from './Input';
import SelectOption from './SelectOption';
import RadioOption from './RadioOption';

function Edit({ dataValues, onUpdateProduct }) {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(dataValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      onUpdateProduct(formValues.id, formValues);
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
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
            <Input label="Product Price" type="text" id="product_price" placeholder="$ 1" value={formValues?.product_price || ''} onChange={handleOnChange} required />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" disabled={isLoading}>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Edit;
