import React from 'react';

import './styles.css';

const Button = ({ text, width,disabled, onClick }) => (
    <button style={{"width": width}} 
    className="btn-primary" 
    type="submit"
    onClick={onClick}
    >{text}
    </button>
)

export default Button;