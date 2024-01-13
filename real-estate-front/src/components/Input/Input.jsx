import React from 'react';
import './input.scss';

const Input = ({type, name, label, change, value}) => {
  return (
   <div className='from-group'>
        <input
            name={name}
            type={type}
            placeholder={label}
            onChange={change}
            value={value}
        />
   </div>
  )
}

export default Input