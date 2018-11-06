import React, { Component } from 'react';
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
        <form className="form-inline" onSubmit={(event) => this.formSubmitted(event)}>
          <div className="form-group mb-2">
            <label htmlFor="newTodo">New Todo </label>
            <input className="form-control" onChange={(event) => this.newTododChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Add Todo</button>
        </form>
        <button className="btn btn-primary mb-2" onClick={() => this.allDone()}>All Done</button>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
              {/* <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span> */}
              <span className={todo.done ? 'done' : ''}>{todo.title}</span>
              <button className="btn btn-primary mb-2" onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
