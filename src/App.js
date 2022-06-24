import React, { Component } from 'react';
import TitleTodo from './components/Title';
import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: '',
      todoItems: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todoItems: [...this.state.todoItems, this.state.todoInput],
      todoInput: ''
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      todoInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TitleTodo />

        {/* Form Input Todo List*/}
        <div className='flex items-center justify-center'>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.todoInput} onChange={this.handleChange} />
            <button className='bg-sky-600'>Add</button>
          </form>
        </div>   

        {/* Daftar List */}
        <div className='flex flex-col text-xl font-Righteous text-center mt-10 text-slate-50'>
          {this.state.todoItems}
        </div>
        
      </div>
    )
  }
}

export default App;
