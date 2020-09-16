import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import Input, { InputProps } from '../Input';

const InputForm: React.FC<InputProps> = ({ name, ...props }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
    setFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input
        error={error}
        isFocused={isFocused}
        isFilled={isFilled}
        onFocus={() => setFocused(true)}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        name={fieldName}
        {...props}
      />
    </>
  );
};

export default InputForm;
