import { Textarea } from '@mantine/core';
export default function TextareaCustom({ id, label, value, disabled, onChange }) {
  return (
    <div className="flex flex-col my-2 relative gap-1">
      <label htmlFor={id} className="text-[14px] font-medium text-one">
        {label} :
      </label>
      <Textarea
        variant="unstyled"
        id={id}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        disabled={disabled}
        className={`border border-[#EFF0F0] rounded-[10px] h-max pl-3 text-[14px] font-medium text-one outline-none ${disabled ? 'bg-[#F4F5F7]' : ''}`}
      />
    </div>
  );
}
