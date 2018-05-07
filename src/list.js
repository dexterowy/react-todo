import React from 'react';
import Todo from './todo.js'
import Completed from './completed.js'

class List extends React.Component {
  render() {
    return(
      <div className="list__wrapper">
        <Todo onDel={this.props.onDel} data={this.props.data.todo} onEdit={this.props.onEdit} onDone={this.props.onDone}></Todo>
        <Completed onDel={this.props.onDel} data={this.props.data.completed} onDone={this.props.onDone}></Completed>
      </div>
    )
  }
}

export default List;