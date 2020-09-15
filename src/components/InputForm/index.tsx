import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import Input, { InputProps } from '../Input';

const InputForm: React.FC<InputProps> = ({ name, ...props }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Input
      defaultValue={defaultValue}
      ref={inputRef}
      name={fieldName}
      {...props}
    />
  );
};

export default InputForm;
