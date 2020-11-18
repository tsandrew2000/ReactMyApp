import React from "react";
import Additem from "./additem";

class Addlist extends React.Component {

  render() {
    return (
      <div>
          {this.props.todos.map(todo => (
              <Additem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps} />
          ))}

      </div>
    )
  }
}
export default Addlist