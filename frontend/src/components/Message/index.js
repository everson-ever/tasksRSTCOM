import React from 'react';

import './styles.css';

const Message = ({message, fieldError, type, isError = true}) => {
    return (
        <>
            { fieldError && fieldError.type.toString() === type.toString()? <span className={isError? 'error-message':'success-message'}>{message}</span> : null }        
        </>
    );
}

export default Message;