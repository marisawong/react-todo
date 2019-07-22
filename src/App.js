import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js'; 
import Header from './components/layout/header.js';
import AddTodo from './components/AddTodo.js';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        // id: 1,
        id: uuid.v4(), 
        title: 'Burp',
        completed: true
      },
      {
        id: uuid.v4(), 
        title: 'Fart',
        completed: false
      },
      {
        id: uuid.v4(), 
        title: 'Poop',
        completed: false
      }
    ]
  }

  // Toggles complete 
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map( (todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) }); 
  }

  // Delete todo
  deleteTodo = (id) => {
    // Spread operator ... to copy what is in the this.state.todos list
    this.setState( { todos: [...this.state.todos.filter( todo => todo.id !== id)]})
    // Need to add persistence because React is just a UI/frontend framework
    // On reload, will have all the original 3 items in the todo list
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      // title: title, Can just put title because same name (es6) 
      title, 
      complete: false
    };
    this.setState( {todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
                 markComplete={this.markComplete}
                 deleteTodo={this.deleteTodo}/>
        </div>
        
      </div>
    );
  }
}

export default App;
