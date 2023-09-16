export default function Textarea({ label, id, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea type="text" className="form-control" id={id} style={{ height: '120px' }} defaultValue={''} {...props} />
    </div>
  );
}
