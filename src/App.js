import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeItem() {
    const { selected, listTodo } = this.state;
    listTodo.splice(listTodo.indexOf(selected), 1);
    this.setState({
      listTodo,
      selected: null,
    });
  }

  selectTask({ target }) {
    const { innerHTML } = target;
    this.setState((state) => ({
      selected: state.selected === innerHTML ? null : innerHTML,
    }));
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} removeItem={ this.removeItem } selected={ selected } />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} handleClick={ this.selectTask } />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
