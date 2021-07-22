import React from 'react'
const InputForm = ({
  value, type, label, handleChange, handleClick, className, placeholder, required }) => {
  return(
    <div className={className}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value} type={type}
        onChange={handleChange}
        onClick={handleClick}
        required={required}
      ></input>
    </div>
  )
}

export default InputForm