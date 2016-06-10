import React from 'react';
import {render} from 'react-dom';

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        "Todo 1",
        "Todo 2",
        "Todo 3"
      ]
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(text) {
    let todos = this.state.todos
    todos.push(text)
    this.setState({todos: todos})
  }

  render () {
    let todoItems = this.state.todos.map(function(todoItem, i) {
      return <TodoItem key={i} text={todoItem} />
    })

    return (
      <div>
        <h2>{this.props.name}</h2>
        <TodoAdd addTodo={this.addTodo}/>
        {todoItems}
      </div>
    )
  }
}

TodoList.propTypes = {
  name: React.PropTypes.string
}

TodoList.defaultProps = {
  name: "Todo List 1"
}

class TodoItem extends React.Component {
  render () {
    return (
      <div>{this.props.text}</div>
    )
  }
}

class TodoAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleClick  = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleClick() {
    this.props.addTodo(this.state.text)
    this.setState({text: ""})
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      this.props.addTodo(this.state.text)
      this.setState({text: ""})
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    )
  }
}

export default TodoList
