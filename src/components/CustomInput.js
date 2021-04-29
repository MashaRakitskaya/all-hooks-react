import { forwardRef, useImperativeHandle, useRef } from 'react';

function CustomInputInner({ name, id, onChange, value }, ref) {
  function handleChange(e) {
    e.preventDefault()
    onChange(e)
  }

  const inputEl = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus()
    },
  }))

  return (
    <input
      value={value}
      className="add-todo__input"
      type="text"
      id={id}
      name={name}
      onChange={handleChange}
      ref={inputEl}
      placeholder="Add a user"
      required
    />
  )
}

export const CustomInput = forwardRef(CustomInputInner)
