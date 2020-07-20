import React, { useState } from 'react';

import './styles.css';

const Input = ({ type, name,value, placeholder, onChange }) => {
    //const [componentValue, setComponentValue] = useState(value);

    return (
        <input className="input-component" type={type} name={name} placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)} />
    )
}

export default Input;