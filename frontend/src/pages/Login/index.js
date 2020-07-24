import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { login } from '../../redux/_actions';
import { saveToken } from '../../services/auth';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Message from '../../components/Message';
import BackPage from '../../components/BackPage';
import './styles.css';

const Login = () => {
    const [state, setState] = useState({
        onHandle: false,
        message: '',
        success: false,
    });

    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    });
    const { isValid } = formState;

    const dispatch = useDispatch();
    const history = useHistory();

    const { isAuthenticated } = useSelector(state => state.security.auth)

    useEffect(() => {
        if(isAuthenticated){
            history.push('/todolist');
        }
    }, [isAuthenticated, history])

    const handleSignin = async (data) => {
        try {
           if (!isValid) return;

            const { email, password } = data;
            const response = await axios.post('http://localhost:3333/api/session', {
                email,
                password
            });

            const { body: payload } = response.data
            saveToken(payload.token);

            dispatch(login(payload));

        }
        catch(error) {
            setState({ ...state, message: 'Email ou senha incorretos' })
        }
    }


    return (
        <section className="box-content">
            <BackPage />
            <div className="box-form">
                <Title text="Faça seu login" />
                <form autoComplete="off" onSubmit={handleSubmit(handleSignin)}>
                    <div className="box-input">
                        <input type="email" name="email" 
                      
                        placeholder="E-mail" 
                        ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i  })}
                       /> 
                        <Message fieldError={errors.email} type="required" message="O campo E-mail é obrigatório" />  
                        <Message fieldError={errors.email} type="pattern" message="Digite um E-mail válido" />                                      
                    </div>

                    <div className="box-input">
                        <input type="password" name="password" 
                        placeholder="Senha"
                        ref={register({ required: true })} />
                        <Message fieldError={errors.password} type="required" message="O campo Senha é obrigatório" />    
                    </div>
                    <Button disabled={isValid} text="Entrar"  />
                </form>
                <p className="error-message text-center">{state.message}</p>
                <div className="center">
                    <Link to="/" className="text-link">Não possuo cadastro</Link>
                </div>
                
            </div>
        </section>
    );
}

export default Login;