import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import Message from '../../components/Message';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';

import './styles.css';
import PictureProfile from '../../components/PictureProfile';

const PersonalData = () => {
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [onHandle, setOnHandle] = useState(false);

    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    });

    const { isValid } = formState;


    useEffect(() => {
        async function getUserData() {
            try {
                const response = await axios.get('/users/me');
                const { body: userData } = response.data;

                setUserData(userData);  
            }
            catch(error) {
                console.log(error);
            }
        }

        getUserData()
    }, [])


    const handleUpdate = async (data) => {
        try {
            if (!isValid) return;

            setOnHandle(true);
            const { name, email, password, passwordConfirmation } = data;
            if (password !== passwordConfirmation) {
                setMessage('As senhas devem ser iguais');
                setSuccess(false);
                return;
            }
            
            await axios.put('/users', {
                name,
                email,
                password,
                passwordConfirmation
            });

            setSuccess(true);
            setMessage('Dados atualizados com sucesso');
        }
        catch(error) {
            setSuccess(false);
            setMessage('Não foi possível processar a solicitação no momento');
        }
        finally {
            setOnHandle(false);
        }
    }

    return (
        <section className="box-content-site">
            <Sidebar />
            <div className="box-form-data">
                <PictureProfile userPicture={userData?.picture} />

                <form autoComplete="off" onSubmit={handleSubmit(handleUpdate)}>
                    <div className="box-input">
                        <input type="text" name="name"
                        placeholder="Nome"
                        defaultValue={userData.name} 
                        ref={register({ required: true })} />
                        <Message fieldError={errors.name} type="required" message="O campo nome é obrigatório" />
                    </div>

                    <div className="box-input">
                        <input type="email" name="email" 
                        placeholder="E-mail" 
                        defaultValue={userData.email} 
                        ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                        <Message fieldError={errors.email} type="required" message="O campo E-mail é obrigatório" />
                        <Message fieldError={errors.email} type="pattern" message="Digite um E-mail válido" />                                              
                    </div>

                    <div className="box-input">
                        <input type="password" name="password" 
                        placeholder="Senha" 
                        ref={register({ required: true, minLength: 6 })} />
                        {  }
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

                    { message && success && <span className="success-message">{message}</span> }
                    { message && !success && <span className="error-message">{message}</span> }
                    <Button text="Editar" onHandle={onHandle} width={250} />
                </form>
            </div>
        </section>
    );

}

export default PersonalData;