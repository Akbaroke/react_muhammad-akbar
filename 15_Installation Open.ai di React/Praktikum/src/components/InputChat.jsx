import { Textarea } from '@mantine/core';

export default function InputChat({ value, onChange }) {
  return (
    <Textarea
      placeholder="Type here..."
      variant="unstyled"
      autosize
      autoFocus
      className="[&>div>textarea]:p-0 pt-1 text-[14px] px-2 w-full"
      minRows={1}
      maxRows={4}
      maxLength={200}
      value={value}
      onChange={onChange}
    />
  );
}
