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
              listToDo.map((toDo, index) => (
                <li key={index + 1}>
                  <Item content={toDo} />
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
  listToDo: state.listToDo,
});

export default connect(mapStateToProps)(App);
