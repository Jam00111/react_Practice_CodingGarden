import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

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
        <NewTodoForm
          formSubmitted={this.formSubmitted.bind(this)}
          newTododChanged={this.newTododChanged.bind(this)}
          newTodo={this.state.newTodo} />

        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-2">
            <Button bsStyle="primary" onClick={() => this.allDone()}>All Done</Button>
          </div>
        </div>

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
