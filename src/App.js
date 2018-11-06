import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Coding Garden!',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      },
      {
        title: 'Learn JSX',
        done: false
      }]
    };
  }
  formSubmitted(event) {
    event.preventDefault();
    console.log("form submited : " + this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }
  newTododChanged(event) {
    // console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  }

  toggleTodoDone(event, index) {
    console.log(event.target.checked);
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    }; //shallow copy made using spread operator
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      }
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="container">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <div className="row">
            <div className="col">
              <input className="form-control" onChange={(event) => this.newTododChanged(event)}
                id="newTodo" name="newTodo" value={this.state.newTodo} placeholder="new todo" />
            </div>
            <div className="col">
              <Button type="submit" bsStyle="btn btn-primary">Add Todo</Button>
            </div>
            <div className="col">
              <Button bsStyle="btn btn-primary" onClick={() => this.allDone()}>All Done</Button>
            </div>
          </div>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (<div class="row"><li key={todo.title}>
              <div className="col"><input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
                {/* <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span> */}
                <span className={todo.done ? 'done' : ''}>{todo.title}</span></div>
              <div className="col"> <button className="btn btn-primary mb-2" onClick={() => this.removeTodo(index)}>Remove</button></div>
            </li></div>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
