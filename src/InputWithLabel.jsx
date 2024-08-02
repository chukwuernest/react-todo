import React from 'react'

function InputWithLabel({
  label,
  id,
  value,
  type,
  name,
  onChange = 'text',
  children,
}) {
  return (
    <>
      <label htmlFor='' id='todoTitle' className='todotitle'>
        {label}
      </label>
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
      ></input>
    </>
  )
}

export default InputWithLabel
