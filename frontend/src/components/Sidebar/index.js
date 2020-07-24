import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../redux/_actions';
import { removeToken } from '../../services/auth';

import Logo from '../../assets/images/logo-rstcom-ok-.png';
import './styles.css';

const SideBar = () => {
    const { payload } = useSelector(state => state.security.auth);

    const dispatch = useDispatch();

    const logoutHandle = () => {
        removeToken();
        dispatch(logout());
    }

    return (
        <div className="box-menu">
        <div className="box-logout">
            <span className="logout-text" onClick={logoutHandle}>Sair</span>
        </div>
        <div className="top-info">
            <div className="box-img">
                <img src={Logo} alt="logo" />
            </div>
            <div className="user-info">
                <h3 className="user-name">{payload?.name}</h3>
                <h5 className="user-email">{payload?.email}</h5>
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