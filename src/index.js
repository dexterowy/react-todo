import React from 'react';
import ReactDom from 'react-dom';
import AddItem from './addItem.js'
import List from './list.js'
import './css/index.css';
import './css/list.css';
import './css/addItem.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {id: 0, value: "Napisać własny projekt na Pracownie Aplikacji Internetowych", state: "completed", edit: false},
        {id: 1, value: "Wynieść śmieci", state: "todo", edit: true},
        {id: 2, value: "Nakarmić psa", state: "todo", edit: false},
        {id: 3, value: "Zbudować dom", state: "todo", edit: false},
        {id: 4, value: "Spłodzić syna", state: "todo", edit: false},
        {id: 5, value: "Zasadzić drzewo", state: "completed", edit: true},
        {id: 6, value: "Poznać ReactJS", state: "completed", edit: false}
      ]
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }
  render() {
    return(
      <div className="app__wrapper">
        <AddItem onAdd={this.onAdd}/>
        <List onDel={this.onDelete} data={this.state.items} onDone={this.onComplete} onEdit={this.onEdit}></List>
        <footer>Powered by ReactJS | Created by Mateusz Szczotarz 2018</footer>
      </div>
    );
  }
  onAdd(item) {
    const todo = this.state.items;
    console.log(this.state.items)
    let index = 0;
    if(todo.length) {
      index = todo[todo.length-1].id + 1;
    }
    todo.push({id: index, value: item, state: "todo", edit: false});
    console.log(this.state)
    this.setState( {
      items: todo
    });
    console.log(this.state)
  }

  onDelete (item) {
    const filtered = this.state.items.filter((todoItem, index) => {
      return(item !== todoItem.id);
    })
    console.log(filtered)
    this.setState( {
      items: filtered
    })
    console.log(this.state.items)
  }
  onComplete(id) {
    const items = this.state.items;
    items.forEach( (item) => {
      if(item.id === id && item.state === "todo") {
        item.state = "completed";
        item.edit = false;
      }
      else if(item.id === id && item.state === "completed") {
        item.state = "todo";
      }
      this.setState({
        items: items
      });
    })
  }
  onEdit = (id, value) => {
    const items = this.state.items.filter((item) => {
      if(item.id === id) {
        if(item.edit === true) {
          item.edit = false;
          item.value = value;
        }
        else {
          item.edit = true;
        }
      }
      return true;
    })
    this.setState({
      items: items
    })
  }
}
ReactDom.render(<App />, document.getElementById('root'));