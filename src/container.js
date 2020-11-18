import React from "react";
import Addlist from "./addlist";
import Header from "./header";
import Inputadd from "./inputadd";
import { v4 as uuidv4 } from "uuid";

class Container extends React.Component {
    state = {
        todos: [
          {
            id: uuidv4(),
            title: "CNIT 103 -Hardware–3 units (id = 1)",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 131 –Internet & Intro to HTML, CSS –3 units(id = 2)",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 106 –Introduction to Networks –3 units(id =3)",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 120 –Network Security –3 units(id =4)",
            completed: false
          }
        ]
       };

  handleChange = (id) => {
      this.setState({
          todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed;
              }
              return todo;
          })
      });
  };

  deleteTodo = id => {
      this.setState({
          todos: [
              ...this.state.todos.filter(todo => {
                  return todo.id !== id;
              })
          ]
      });
  };

  addTodoItem = title => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
    };
    this.setState({
        todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
          <Header />
          <Inputadd addTodoProps={this.addTodoItem} />
          <Addlist todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
      </div>
    )
  }
}
export default Container