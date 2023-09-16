export default function Button({ children, type, id, disabled, ...props }) {
  return (
    <button type={type} id={id} className="btn btn-primary w-100 mt-3" disabled={disabled} {...props}>
      {children}
    </button>
  );
}
