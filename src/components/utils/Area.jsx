import React from 'react';

const Area = ({className, value, name, onChange, placeholder}) => {
  return <textarea className={className} value={value} name={name} onChange={onChange} placeholder={placeholder}/>
}

export default Area;
