import React, { Fragment, useState } from 'react'

function EditTodo({ todo }) {

    const [description, setDescription] = useState(todo.description);

    //edit button function
    async function updateDescription(e){
        try {
            e.preventDefault();
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
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
            <div class="modal" id={`id${todo.id}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                    <input type="text" name="" id="" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo