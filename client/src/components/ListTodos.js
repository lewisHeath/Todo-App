import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    //delete todo function 
    async function deleteTodo(id) {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });
            // console.log(deleteTodo);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchTodos() {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    { todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos