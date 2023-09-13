export default function ImageInput({ label, id, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input className="form-control text-primary" type="file" id={id} {...props} />
    </div>
  );
}
