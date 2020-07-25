import React from 'react';

import Loading from '../../components/Loading';
import './styles.css';

const Button = ({ text, width,disabled, onHandle = false, onClick }) => (
    <button style={{"width": width}} 
    className="btn-primary button-loading" 
    type="submit"
    onClick={onClick}
    >{onHandle? <Loading type='spin' color='#ffffff' /> : text}
    </button>
)

export default Button;