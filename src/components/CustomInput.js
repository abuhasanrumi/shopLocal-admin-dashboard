import React from 'react'

const CustomInput = (props) => {
    const { type, label, i_id, i_class, divClassName, name, val, onCh } = props
    return (
        <div className={`form-floating mb-3 ${divClassName}`}>
            <input
                type={type}
                className={`form-control ${i_class}`}
                id={i_id}
                placeholder={label}
                value={val}
                name={name}
                onChange={onCh}
                onBlur={onCh}
            />
            <label htmlFor={i_id}>{label}</label>
        </div>
    )
}

export default CustomInput