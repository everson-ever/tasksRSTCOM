import React from 'react';

import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';
import './styles.css';

const Todo = () => {
    return (
        <section className="box-content-site">
            <Sidebar />
            <div className="box-todos">   
                <Title text="Lista de tarefas" />

                <ul className="list-todo">
                    <li className="todo">
                        <input className="check" type="checkbox" />
                        <p className="todo-text">Tarefa 1</p>
                        <button className="btn-remove-todo" type="button">Remover</button>
                    </li>

                    <li className="todo">
                        <input className="check" type="checkbox" />
                        <p className="todo-text">Tarefa 2</p>
                        <button className="btn-remove-todo" type="button">Remover</button>
                    </li>

                    <li className="todo">
                        <input className="check" type="checkbox" />
                        <p className="todo-text">Tarefa 3</p>
                        <button className="btn-remove-todo" type="button">Remover</button>
                    </li>
                </ul>
                
            </div>

        </section>
    );

}

export default Todo;