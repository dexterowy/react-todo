import React from 'react';
import Item from './item.js'

class Todo extends React.Component {
  render() {
    return(
      <ol id="todo" className="list">
        {
          this.props.data.map( item => {
            if(item.state === "todo") {
              return(
                <Item value={item.value} onEdit={this.props.onEdit} state={item.state} edit={item.edit} key={item.id} id={item.id} onDel={this.props.onDel} onDone={this.props.onDone}></Item>
              )
            }
            else {
              return(null);
            }
          })
        }
      </ol>
    )
  }
}
export default Todo;