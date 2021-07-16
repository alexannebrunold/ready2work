import React from 'react'

const InputForm = ({value, type, label, handleChange}) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} type={type} onChange={handleChange}></input>
        </>
    )
}

export default InputForm