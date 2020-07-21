import React from 'react';

import './styles.css';

const Button = ({ text, width }) => <button style={{"width": width}} className="btn-primary" type="button">{text}</button>

export default Button;