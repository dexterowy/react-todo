import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "test",
    }
    this.onEnter = this.onEnter.bind(this);
  }
  render() {
    return(
      <header>
        <input placeholder="Type here!" ref="add" onKeyDown={this.onEnter} autoFocus></input>
        <button onClick={ () => {
          this.handleClick(this.refs.add.value)
        }}>
          <svg version="1.1" id="Layer_1">
          <g>
            <g>
              <path className="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1
                s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/>
            </g>
          </g>
          </svg>
        </button>
      </header>
    )
  }
  handleClick () {
    this.props.onAdd(this.refs.add.value, "todo");
    this.refs.add.value = "";
  }
  onEnter(e) {
    if(e.keyCode === 13) {
      this.handleClick();
    }
  }
}

export default AddItem;