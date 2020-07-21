import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';
import BackPage from '../../components/BackPage';
import './styles.css';

const Login = () => {
    const [state, setState] = useState({
        onHandle: false,
        email: '',
        password: '',
        message: '',
        success: false,
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setState({...state, [e.target.name]: value})
    }


    return (
        <section className="box-content">
            <BackPage />
            <div className="box-form">
                <Title text="Faça seu login" />
                <form>
                    <div className="box-input">
                        <Input type="email" name="email" 
                        value={state.email} 
                        placeholder="E-mail" 
                        onChange={(e) => onChangeHandler(e)} />                                             
                    </div>

                    <div className="box-input">
                        <Input type="password" name="password" 
                        value={state.password} 
                        placeholder="Senha" 
                        onChange={(e) => onChangeHandler(e)} />
                    </div>
                    <Button text="Entrar" />
                </form>

                <div className="center">
                    <Link to="/" className="text-link">Não possuo cadastro</Link>
                </div>
                
            </div>
        </section>
    );
}

export default Login;