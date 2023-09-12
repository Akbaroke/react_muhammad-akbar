export default function SelectOption({ label, id, options }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select className="form-select" id={id}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
