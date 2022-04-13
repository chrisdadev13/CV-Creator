import React from 'react';

const Input = ({name, value, placeholder, onChange, className}) => {
  return <input name={name} value={value} placeholder={placeholder} onChange={onChange} className={className}/>
}

export default Input;
