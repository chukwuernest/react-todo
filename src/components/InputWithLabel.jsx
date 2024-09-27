import React, { useRef, useEffect } from 'react'
import PropType from 'prop-types'

function InputWithLabel({
  autoFocus,
  label,
  id,
  value,
  type,
  name,
  onChange = 'text',
  children,
}) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <>
      <label htmlFor='' id='todoTitle' className='todotitle'>
        {children}
      </label>
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        ref={inputRef}
      ></input>
    </>
  )
}
InputWithLabel.PropType = {
  id: PropType.func,
  value: PropType.func,
  type: PropType.func,
  name: PropType.func,
  children: PropType.func,
}

export default InputWithLabel
