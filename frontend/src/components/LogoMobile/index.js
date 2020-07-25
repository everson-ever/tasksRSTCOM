import React from 'react';

import './styles.css';

const LogoMobile = ({logo: Logo}) => (
    <div className="box-logo-mobile">
        <img className="logo-mobile" alt="Logo mobile" src={Logo} />
    </div>
);

export default LogoMobile;