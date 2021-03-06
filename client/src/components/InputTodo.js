import React, { Fragment, useState } from 'react'

function InputTodo() {

    const [description, setDescription] = useState('');

    async function onSubmitForm(e) {
        try {
            e.preventDefault();
            const response = await fetch('https://stormy-citadel-58837.herokuapp.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description })
            });

            // console.log(response);
            window.location = "/";
        } catch (error) {
            console.log(error);
        }
    }

     return (
        <Fragment>
            <h1 className='text-center mt-5'>Pern Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type="text" className='form-control' value={description} 
                    onChange={e => {setDescription(e.target.value)}}/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;