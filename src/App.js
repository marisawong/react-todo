import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Todos from './components/Todos.js'; 
import Header from './components/layout/header.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About.js';
import uuid from 'uuid';
import axios from 'axios'; 

class App extends Component {
  state = {
    todos: []
      // {
      //   // id: 1,
      //   id: uuid.v4(), 
      //   title: 'Burp',
      //   completed: true
      // },
      // {
      //   id: uuid.v4(), 
      //   title: 'Fart',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(), 
      //   title: 'Poop',
      //   completed: false
      // }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( {todos: res.data})) 
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
    // this.setState( { todos: [...this.state.todos.filter( todo => todo.id !== id)]})
    // Need to add persistence because React is just a UI/frontend framework
    // On reload, will have all the original 3 items in the todo list
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({
        todos: [...this.state.todos.filter( todo => todo.id !== id)]
      }))
  }

  // Add todo
  addTodo = (title) => {
    // const newTodo = {
      // id: uuid.v4(),
      // title: title, Can just put title because same name (es6) 
      // title, 
      // complete: false
    // };
    // this.setState( {todos: [...this.state.todos, newTodo]});
    // console.log(title);
    // Making a post request instead 
    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title, 
      completed: false
    })
      .then( res => this.setState({ 
        todos: [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={ props => (
                <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos}
                       markComplete={this.markComplete}
                       deleteTodo={this.deleteTodo}/>   
                </React.Fragment>            
              )} />
              <Route path="/about" component={About}/>
            </div>  
          </div>
      </Router>
    );
  }
}

export default App;
