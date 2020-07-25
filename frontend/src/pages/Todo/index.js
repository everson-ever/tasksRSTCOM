import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';
import './styles.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        async function getTodos() {
            const response = await axios.get('/todos');
            const todos = response?.data?.body;
            setTodos(todos);
        }
        getTodos();
    }, []);

    const handleNewTask = async () => {
        try {
            if (!task) return;

            const response = await axios.post('/todos', {task});
            const todo = response.data.body;
            setTodos([...todos, todo]);
            setTask('');
        }
        catch(error) {
            console.log(error);
        }
    }

    const handleRemoveTask = async (id, index) => {
        try {
            await axios.delete(`/todos/${id}`);
            todos.splice(index, 1);
            setTodos([...todos]);
        }
        catch(error) {
            console.log(error);
        }
    }

    const handleStatusTask = async (id, checked, index) => {
        try {
            await axios.put(`/todos/status`, { id, status: checked });
            todos[index].completed = checked;
            setTodos([...todos]);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <section className="box-content-site">
            <Sidebar />
            <div className="box-todos">   
                <div className="box-new-task">
                        <input className="input-new-task" type="text" name="todo" 
                        placeholder="Nova tarefa..."
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        />

                        <button type="button" onClick={handleNewTask} className="btn-new-task">Criar</button>                  
                    
                </div>

                <Title text="Lista de tarefas" />

                <ul className="list-todo">
                    { todos.map((todo, index) => (
                        <li className="todo" key={todo._id}>
                            <input className="check" checked={todo.completed} type="checkbox"  
                            onChange={e => handleStatusTask(todo._id, e.target.checked, index)} />
                            <p className={todo.completed? 'todo-text-completed' : 'todo-text'}>{todo.task}</p>
                            <button className="btn-remove-todo" 
                            type="button" onClick={() => handleRemoveTask(todo._id, index)}>Remover</button>
                        </li>
                    ))}
                </ul>
                
            </div>
        </section>
    );

}

export default Todo;