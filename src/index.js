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
      items: {
        todo: [
          {id: 1, value: "Wynieść śmieci", state: "todo", edit: false},
          {id: 2, value: "Nakarmić psa", state: "todo", edit: false},
          {id: 3, value: "Zbudować dom", state: "todo", edit: false},
          {id: 4, value: "Spłodzić syna", state: "todo", edit: false}
        ],
        completed: [
          {id: 1, value: "Napisać własny projekt na Pracownie Aplikacji Internetowych",state: "completed", edit: false},
          {id: 2, value: "Zasadzić drzewo",state: "completed", edit: false},
          {id: 3, value: "Poznać ReactJS",state: "completed", edit: false}
        ]
      }
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }
  render() {
    console.log(this.state)
    return(
      <div className="app__wrapper">
        <AddItem onAdd={this.onAdd}/>
        <List onDel={this.onDelete} data={this.state.items} onDone={this.onComplete} onEdit={this.onEdit}></List>
        <footer>Powered by ReactJS | Created by Mateusz Szczotarz 2018</footer>
      </div>
    );
  }
  onAdd(item) { //DONE
    const todo = this.state.items.todo;
    let index = 0;
    if(todo.length) {
      index = todo[todo.length-1].id + 1;
    }
    todo.unshift({id: index, value: item, state: "todo", edit: false});
    todo.forEach((item, index) => {
      item.id = index;
    })
    this.setState( {
      items: {
        todo: todo,
        completed: this.state.items.completed
      }

    });
  }

  onDelete (item, state) { //DONE
    if(state === "todo") {
      const filtered = this.state.items.todo.filter((todoItem, index) => {
        return(item !== todoItem.id);
      })
      filtered.forEach((item,index)=> {
        item.id = index;
      })
      this.setState( {
        items: {
          todo: filtered,
          completed: this.state.items.completed
        }
      })
    }
    else if(state === "completed") {
      const filtered = this.state.items.completed.filter((todoItem, index) => {
        return(item !== todoItem.id);
      });
      filtered.forEach((item,index)=> {
        item.id = index;
      })
      this.setState( {
        items: {
          todo: this.state.items.todo,
          completed: filtered
        }
      })
    }
    }


  onComplete(id, state) {
    if(state === "todo") {
      const completed = this.state.items.completed;
      const filtered = this.state.items.todo.filter((todoItem, index) => {
        if(id !== todoItem.id) return(true);
        else {
          todoItem.state = "completed";
          completed.unshift(todoItem);
          return(false);
        }
      })
      completed.forEach((item, index) => {
        item.id = index;
      });
      filtered.forEach((item, index) => {
        item.id = index;
      })
      this.setState( {
        items: {
          todo: filtered,
          completed: completed
        }
      })
    }
    else if(state === "completed") {
      const todos = this.state.items.todo;
      const filtered = this.state.items.completed.filter((todoItem, index) => {
        if(id !== todoItem.id) return(true);
        else {
          todoItem.state = "todo";
          todos.unshift(todoItem);
          return(false);
        }
      })
      todos.forEach((item, index) => {
        item.id = index;
      });
      filtered.forEach((item, index) => {
        item.id = index;
      })
      this.setState( {
        items: {
          todo: todos,
          completed: filtered
        }
      })
    }
  }

  onEdit = (id, state, value) => {
    if(state === "todo") {
      const items = this.state.items.todo.filter((item) => {
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
        items: {
          todo: items,
          completed: this.state.items.completed
        }
      })
    }
  }


}
ReactDom.render(<App />, document.getElementById('root'));