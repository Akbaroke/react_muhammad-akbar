import { useEffect, useState } from 'react';

function RadioOption({ options, name, label, value, onChange }) {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    selectedValue &&
      onChange({
        target: {
          id: name,
          value: selectedValue,
        },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="d-flex flex-column">
        {options?.map((option) => (
          <Option key={option.id} name={name} value={option.value} label={option.label} checked={selectedValue === option.value} onChange={handleRadioChange} />
        ))}
      </div>
    </div>
  );
}

function Option({ name, value, label, checked, onChange }) {
  return (
    <label>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

export default RadioOption;
