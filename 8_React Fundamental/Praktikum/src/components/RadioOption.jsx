export default function RadioOption({ options, name, label }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {options.map((option) => (
        <div key={option.id} className="form-check">
          <input className="form-check-input" type="radio" defaultValue={option.value} name={name} id={option.id} />
          <label className="form-check-label" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}
