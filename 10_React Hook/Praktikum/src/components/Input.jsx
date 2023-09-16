export default function Input({ label, type, id, placeholder, error, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor="product_name" className="form-label">
        {label}
      </label>
      <input type={type} className={`form-control ${error ? 'is-invalid' : ''}`} id={id} placeholder={placeholder} {...props} />
      <div id="validasi_product_name" className="invalid-feedback">
        {error}
      </div>
    </div>
  );
}
