import React from 'react';
import { Button } from 'react-bootstrap';


const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <div className="row">
                <div className="col-md-4">
                    <input className="form-control" onChange={props.newTododChanged}
                        id="newTodo" name="newTodo" value={props.newTodo} placeholder="new todo" />
                </div>
                <div className="col-md-2">
                    <Button type="submit" bsStyle="primary">Add Todo</Button>
                </div>
            </div>
        </form>
    );
};


export default NewTodoForm;