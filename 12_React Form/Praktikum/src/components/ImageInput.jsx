import * as React from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FiImage } from 'react-icons/fi';

const InputImage = ({ label, id, value, errorLabel, onChange }) => {
  const [error, setError] = React.useState('');
  const [blob, setBlob] = React.useState(value);

  const handleDrop = (e) => {
    const file = e[0];

    if (file.size > 1000000) {
      setError('File tidak boleh melebihi 1MB');
      onChange('');
      setBlob('');
    } else {
      setBlob(URL.createObjectURL(file));
      onChange(file);
      setError('');
    }
  };

  return (
    <div className="flex flex-col my-2 relative gap-1">
      <label htmlFor={id} className="text-[14px] font-medium text-one">
        {label} :
      </label>
      <Dropzone p={15} accept={IMAGE_MIME_TYPE} onDrop={handleDrop} onErrorCapture={() => console.log('File tidak boleh melebihi 1MB')} className="border border-two border-dashed rounded-[10px] grid place-items-center min-h-[100px]">
        {blob ? (
          <img src={blob} alt={label} className="w-[120px] h-[120px] rounded-full shadow-xl" />
        ) : (
          <div className="flex flex-col gap-1 items-center text-gray-400/50">
            <FiImage className="text-[30px] text-two" />
            <p className="text-two text-[12px]">Foto size max. 1MB</p>
          </div>
        )}
      </Dropzone>
      {errorLabel || error ? <p className="text-red-500 text-[12px]">{errorLabel || error}</p> : null}
    </div>
  );
};

export default InputImage;
