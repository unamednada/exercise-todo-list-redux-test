import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputToDo from './InputToDo';
import Item from './Item';

class App extends Component {
  render() {
    const { listToDo } = this.props;
    return (
      <div className="App">
        <InputToDo />
        {listToDo &&
          <ul>
            {
              listToDo.map((todo, index) => (
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

const mapStateToProps = (state) => ({
  listToDo: state,
});

export default connect(mapStateToProps)(App);
