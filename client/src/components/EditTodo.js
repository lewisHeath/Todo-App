import React, { Fragment, useState } from 'react'

function EditTodo({ todo }) {

    const [description, setDescription] = useState(todo.description);

    //edit button function
    async function updateDescription(e){
        try {
            e.preventDefault();
            const body = { description };
            const response = await fetch(`https://stormy-citadel-58837.herokuapp.com/todos/${todo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            // console.log(response);
            window.location = "/";
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`} >
                Edit
            </button>
            <div class="modal" id={`id${todo.id}`} onClick={() => setDescription(todo.description)}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>

                <div class="modal-body">
                    <input type="text" name="" id="" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo