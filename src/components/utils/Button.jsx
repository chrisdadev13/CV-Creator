import React from 'react';

const Button = ({action, setAction, className}) => {
  return <button onClick={setAction} className={className}>{action}</button>
}

export default Button;
