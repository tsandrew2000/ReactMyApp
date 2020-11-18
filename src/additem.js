import React from "react";

class Additem extends React.Component {
  render() {
    const completeStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.5,
    }

    return <li className="todo-item">
        
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>DELETE</button>
        <span style={this.props.todo.completed ? completeStyle : null}>{this.props.todo.title}</span>
    </li>
  }
}

export default Additem