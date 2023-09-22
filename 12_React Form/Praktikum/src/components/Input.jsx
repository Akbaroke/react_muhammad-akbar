import { NumberInput, Select } from '@mantine/core';

export default function Input({
  label,
  id,
  value,
  errorLabel,
  disabled,
  type = 'text',
  maxLength,
  onChange,
  placeholder,
  datas,
}) {
  return (
    <div className="flex flex-col my-2 relative gap-1">
      <label htmlFor={id} className="text-[14px] font-medium text-one">
        {label} :
      </label>
      {['text', 'email', 'password'].includes(type) && (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e?.target?.value)}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`border border-[#EFF0F0] rounded-[10px] h-[45px] py-1 pl-3 text-[14px] font-medium text-one outline-none ${
            disabled ? 'bg-[#F4F5F7]' : ''
          }`}
          autoComplete="on"
        />
      )}
      {type === 'select' && (
        <Select
          id={id}
          variant="unstyled"
          data={datas}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`border border-[#EFF0F0] rounded-[10px] h-[45px] py-1 pl-3 text-[14px] font-medium text-one outline-none ${
            disabled ? 'bg-[#F4F5F7]' : ''
          }`}
        />
      )}
      {type === 'number' && (
        <NumberInput
          id={id}
          variant="unstyled"
          data={datas}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          className={`border border-[#EFF0F0] rounded-[10px] h-[45px] py-1 pl-3 text-[14px] font-medium text-one outline-none ${
            disabled ? 'bg-[#F4F5F7]' : ''
          }`}
        />
      )}

      {errorLabel ? (
        <p className="text-red-500 text-[12px]">{errorLabel}</p>
      ) : null}
    </div>
  );
}
