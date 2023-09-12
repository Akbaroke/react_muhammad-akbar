export default function Input({ label, type, id, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor="product_name" className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
      <div id="validasi_product_name" className="invalid-feedback" />
    </div>
  );
}
