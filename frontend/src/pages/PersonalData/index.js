import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Sidebar from '../../components/Sidebar';


import User from '../../assets/images/user.png';
import './styles.css';

const PersonalData = () => {
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
        <section className="box-content-site">
            <Sidebar />
            <div className="box-form-data">
                <div className="box-user-picture">
                    <img className="user-picture" alt="User profile" src={User}/>
                    <span className="text-change-picture">Alterar foto</span>
                </div>

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
                        placeholder="E-mail" 
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
                        placeholder="Confirmar senha" 
                        onChange={(e) => onChangeHandler(e)} />
                    </div>

                    <Button text="Editar" width={250} />
                </form>
            </div>
        </section>
    );

}

export default PersonalData;