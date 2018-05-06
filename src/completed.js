import React from 'react';
import Item from './item.js';


class Completed extends React.Component {
  constructor(props) {
    super(props);
    this.completed = this.props.data;
  }
  render() {
    return(
    <ol id="completed" className="list">
      {
        this.props.data.map( item => {
          if(item.state === "completed") {
            return(
              <Item value={item.value} key={item.id} id={item.id} state={item.state} edit={item.edit} onDel={this.props.onDel} onDone={this.props.onDone}></Item>
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
export default Completed;