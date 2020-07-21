import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-rstcom-ok-.png';
import './styles.css';

const SideBar = () => {
    return (
        <div className="box-menu">
        <div className="box-logout">
            <span className="logout-text">Sair</span>
        </div>
        <div className="top-info">
            <div className="box-img">
                <img src={Logo} alt="logo" />
            </div>
            <div className="user-info">
                <h3 className="user-name">Everson Silva</h3>
                <h5 className="user-email">everson@mail.com</h5>
            </div>              
        </div>

        <ul className="menu">
            <li><Link to="/dados-pessoais">Dados pessoais</Link></li>
            <li><Link to="/todolist">TodoList</Link></li>
        </ul>
    </div>
    );
}

export default SideBar;