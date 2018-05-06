import React from 'react';

import './css/item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.renderEditIcons = this.renderEditIcons.bind(this);
    this.renderValue = this.renderValue.bind(this);
  }
  render() {
    return(
    <li>
      {
        this.renderValue()
      }
      <div className="buttons">
        {
          this.renderEditIcons()
        }
        <button className="remove" onClick={this.onDelete}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style={{background:"new 0 0 22 22"}} xmlSpace="preserve"><g><g><path className="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path className="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path className="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path className="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>
        </button>
        {
          this.renderCancel()
        }

      </div>
    </li>
  )
  }
  onDelete() {
    this.props.onDel(this.props.id)
  }
  onComplete() {
    this.props.onDone(this.props.id);
  }

  renderValue() {
    if(this.props.edit === false || this.props.state === "completed") {
      return(
        <div className="text">
          {this.props.value}
        </div>
      )
    }
    else if(this.props.edit === true && this.props.state !== "completed") {
      return(
          <input type="text" defaultValue={this.props.value} ref={"editInput"} autoFocus></input>
      )
    }
  }

  renderEditIcons() {
    if(this.props.state === "todo" && this.props.edit === false){
      return(
        <button className="important" onClick={this.edit}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
          <g>
            <g>
              <path d="m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z" className="fill"/>
              <path className="pFill" d="m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z"/>
            </g>
          </g>
        </svg>
      </button>
    )
    }
    else if(this.props.state === "todo" && this.props.edit === true){
      return(
        <button className="important" onClick={this.save}>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="438.533px" height="438.533px" viewBox="0 0 438.533 438.533" style={{background: "new 0 0 438.533 438.533"}}
          	 xmlSpace="preserve">
          <g>
          	<path className="sFill" d="M432.823,121.049c-3.806-9.132-8.377-16.367-13.709-21.695l-79.941-79.942c-5.325-5.325-12.56-9.895-21.696-13.704
          		C308.346,1.903,299.969,0,292.357,0H27.409C19.798,0,13.325,2.663,7.995,7.993c-5.33,5.327-7.992,11.799-7.992,19.414v383.719
          		c0,7.617,2.662,14.089,7.992,19.417c5.33,5.325,11.803,7.991,19.414,7.991h383.718c7.618,0,14.089-2.666,19.417-7.991
          		c5.325-5.328,7.987-11.8,7.987-19.417V146.178C438.531,138.562,436.629,130.188,432.823,121.049z M182.725,45.677
          		c0-2.474,0.905-4.611,2.714-6.423c1.807-1.804,3.949-2.708,6.423-2.708h54.819c2.468,0,4.609,0.902,6.417,2.708
          		c1.813,1.812,2.717,3.949,2.717,6.423v91.362c0,2.478-0.91,4.618-2.717,6.427c-1.808,1.803-3.949,2.708-6.417,2.708h-54.819
          		c-2.474,0-4.617-0.902-6.423-2.708c-1.809-1.812-2.714-3.949-2.714-6.427V45.677z M328.906,401.991H109.633V292.355h219.273
          		V401.991z M402,401.991h-36.552h-0.007V283.218c0-7.617-2.663-14.085-7.991-19.417c-5.328-5.328-11.8-7.994-19.41-7.994H100.498
          		c-7.614,0-14.087,2.666-19.417,7.994c-5.327,5.328-7.992,11.8-7.992,19.417v118.773H36.544V36.542h36.544v118.771
          		c0,7.615,2.662,14.084,7.992,19.414c5.33,5.327,11.803,7.993,19.417,7.993h164.456c7.61,0,14.089-2.666,19.41-7.993
          		c5.325-5.327,7.994-11.799,7.994-19.414V36.542c2.854,0,6.563,0.95,11.136,2.853c4.572,1.902,7.806,3.805,9.709,5.708l80.232,80.23
          		c1.902,1.903,3.806,5.19,5.708,9.851c1.909,4.665,2.857,8.33,2.857,10.994V401.991z"/>
          </g>
          </svg>
      </button>
      )
    }
  }

  renderCancel = () => {
    if(this.props.state === "todo" && this.props.edit === true){
      return(
        <button className="cancel" onClick={this.cancel}>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 509.889 509.889" style={{background: "new 0 0 509.889 509.889"}} xmlSpace="preserve">
          <g className="fill">
          	<g>
          		<path className="cancelBorder"
          		 d="M254.945,509.889c-140.032,0-254.41-114.378-254.41-255.479S114.912,0,254.945,0
          			s254.41,114.378,254.41,254.41S396.046,509.889,254.945,509.889z M254.945,32.068c-122.929,0-222.342,99.412-222.342,222.342
          			s99.412,222.342,222.342,222.342s222.342-99.412,222.342-222.342C478.355,131.481,377.874,32.069,254.945,32.068z"/>
          		<g>
          			<path
          			 d="M329.771,345.271c-4.276,0-8.552-1.069-11.758-4.276l-74.826-74.826
          				c-6.414-6.414-6.414-16.034,0-22.448l74.826-74.826c6.414-6.414,16.034-6.414,22.448,0c6.414,6.414,6.414,16.034,0,22.448
          				l-63.068,63.068l63.068,63.068c6.414,6.414,6.414,16.034,0,22.448C338.323,344.202,334.047,345.271,329.771,345.271z"/>
          			<path
          			 d="M180.118,345.271c-4.276,0-8.552-1.069-11.758-4.276c-6.414-6.414-6.414-16.034,0-22.448
          				l63.068-63.068l-63.068-63.068c-6.414-6.414-6.414-16.034,0-22.448c6.414-6.414,16.034-6.414,22.448,0l74.826,74.826
          				c6.414,6.414,6.414,16.034,0,22.448l-74.826,74.826C188.67,344.202,184.394,345.271,180.118,345.271z"/>
          		</g>
          	</g>
          </g>
          </svg>
        </button>
      )
    }
    else {
      return(
        <button className="done" onClick={this.onComplete}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style={{background:"new 0 0 22 22"}} xmlSpace="preserve"><rect y="0" className="noFill" width="22" height="22"/><g><path className="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>
        </button>
      )
    }
  }

  save = () => {
    this.props.onEdit(this.props.id, this.refs.editInput.value);
  }
  edit = () => {
    this.props.onEdit(this.props.id);
  }
  cancel = () => {
    this.props.onEdit(this.props.id, this.props.value)
  }

}
export default Item;