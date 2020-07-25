import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Message from '../../components/Message';
import BackPage from '../../components/BackPage';
import './styles.css';

const Register = () => {
    const [state, setState] = useState({
        onHandle: false,
        message: '',
        success: false,
    });

    const { register, handleSubmit, errors, formState, reset } = useForm({
        mode: "onChange"
    });
    const { isValid } = formState;


    const handleSignup = async (data) => {
        try {
            if (!isValid) return;
            const { name, email, password, passwordConfirmation } = data;
            if (password !== passwordConfirmation) {
                setState({...state, success: false, message: 'As senhas devem ser iguais'});
                return;
            }

            await axios.post('/signup', {
                name,
                email,
                password,
                passwordConfirmation
            });

            reset();
            setState({...state, success: true, message: 'Cadastro realizado com sucesso'});
        }
        catch(error) {
            const { statusCode, error: data } = error?.response?.data
            if (statusCode !== 500) {
                const message = data.params;
                setState({ ...state, message: message[0] })
            }
            
        }
    }


    return (
        <section className="box-content">
            <BackPage />
            <div className="box-form">
                <Title text="Faça seu cadastro" />
                <form autoComplete="off" onSubmit={handleSubmit(handleSignup)}>
                    <div className="box-input">
                        <input type="text" name="name"
                        placeholder="Nome" 
                        ref={register({ required: true })} />
                        <Message fieldError={errors.name} type="required" message="O campo nome é obrigatório" />
                    </div>

                    <div className="box-input">
                        <input type="email" name="email" 
                        placeholder="E-mail" 
                        ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                        <Message fieldError={errors.email} type="required" message="O campo E-mail é obrigatório" />
                        <Message fieldError={errors.email} type="pattern" message="Digite um E-mail válido" />                                              
                    </div>

                    <div className="box-input">
                        <input type="password" name="password" 
                        placeholder="Senha" 
                        ref={register({ required: true, minLength: 6 })} />
                        <Message fieldError={errors.password} type="minLength" message="A senha deve ter no mínimo 6 caracteres" />
                        <Message fieldError={errors.password} type="required" message="O campo Senha é obrigatório" />
                    </div>

                    <div className="box-input">
                        <input type="password" name="passwordConfirmation" 
                        placeholder="Confirmar senha" 
                        ref={register({ required: true, minLength: 6 })} />
                         <Message fieldError={errors.passwordConfirmation} type="minLength" message="A senha deve ter no mínimo 6 caracteres" />
                        <Message fieldError={errors.passwordConfirmation} type="required" message="O campo confirmação de senha é obrigatório" />
                    </div>

                    { state.message && state.success && <span className="success-message">{state.message}</span> }
                    { state.message && !state.success && <span className="error-message">{state.message}</span> }
                    <Button text="cadastrar"/>
                    
                </form>

                <div className="center">
                    <Link to="/login" className="text-link">Eu já possuo cadastro</Link>
                </div>
            </div>
        </section>
    );
}

export default Register;