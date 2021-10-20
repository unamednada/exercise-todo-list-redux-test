import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputToDo from './InputToDo';
import Item from './Item';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listToRender: [],
      filter: false,
    };
    this.filter = this.filter.bind(this);
  };

  filter(type) {
    const { listToDo } = this.props;
    const arrayToDo = Object.keys(listToDo);
    this.setState(() => {
      if (type === 'all') return { filter: false };
      return { listToRender: arrayToDo.filter((toDo) => listToDo[toDo][type] === true), filter: true };
    });
  };

  renderToDos() {
    const { filter, listToRender } = this.state;
    const { listToDo } = this.props;
    const arrayToDo = Object.keys(listToDo);
    if (!filter && arrayToDo.length > 0) {
      return (
        <ul>
          {
            arrayToDo.map((toDo, index) => (
              <li key={index + 1}>
                <Item content={toDo} />
              </li>
            ))
          }
        </ul>
      );
    } else if (filter && listToRender.length > 0) {
      return (
        <ul>
          {
            listToRender.map((toDo, index) => (
              <li key={index + 1}>
                <Item content={toDo} />
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <InputToDo />
        { this.renderToDos() }
        <button type="button" onClick={() => this.filter('all')}>Todos</button>
        <button type="button" onClick={() => this.filter('completed')}>Finalizados</button>
        <button type="button" onClick={() => this.filter('ongoing')}>Em andamento</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listToDo: state.toDoReducer.present.listToDo,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  listToDo: PropTypes.object,
};
