import { Radio } from '@mantine/core';

export default function InputRadio({ id, label, datas, value, onChange }) {
  return (
    <div className="flex flex-col my-2 relative gap-1">
      <label htmlFor={id} className="text-[14px] font-medium text-one">
        {label} :
      </label>
      <Radio.Group name="favoriteFramework" id={id} value={value} onChange={onChange}>
        {datas.map((value, index) => (
          <Radio key={index} value={value} label={value} className="my-1" />
        ))}
      </Radio.Group>
    </div>
  );
}
