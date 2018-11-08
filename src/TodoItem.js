import React from 'react';
import { Button } from 'react-bootstrap';

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <li><div className="row">
      <div className="col-md-2">
        <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
        {/* <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span> */}
        <span className={todo.done ? 'done' : ''}>{todo.title}</span></div>
      <div className="col-md-2">
        <Button bsStyle="primary" onClick={() => props.removeTodo(index)} bsSize="small">Remove</Button>
      </div>
    </div></li>
  );
};

export default TodoItem;