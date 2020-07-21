import React, { useState, useEffect } from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';
import BackPage from '../../components/BackPage';
import './styles.css';

const Login = () => {
    const [state, setState] = useState({
        onHandle: false,
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
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
                <Title text="Faça seu cadastro" />
                <form>
                    <div className="box-input">
                        <Input type="text" name="name" 
                        value={state.name} 
                        placeholder="Nome" 
                        onChange={(e) => onChangeHandler(e)} />
                    </div>

                    <div className="box-input">
                        <Input type="email" name="email" 
                        value={state.email} 
                        placeholder="Nome" 
                        onChange={(e) => onChangeHandler(e)} />                                             
                    </div>

                    <div className="box-input">
                        <Input type="password" name="password" 
                        value={state.password} 
                        placeholder="Senha" 
                        onChange={(e) => onChangeHandler(e)} />
                    </div>

                    <div className="box-input">
                        <Input type="password" name="passwordConfirmation" 
                        value={state.passwordConfirmation} 
                        placeholder="Comfirmar senha" 
                        onChange={(e) => onChangeHandler(e)} />
                    </div>

                    <Button text="cadastrar" />
                </form>

                <a href="#d" className="text-link">Eu já possuo cadastro</a>
            </div>
        </section>
    );
}

export default Login;