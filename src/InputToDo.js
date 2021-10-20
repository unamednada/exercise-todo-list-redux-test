import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addToDo as addAction } from './actions';
import { removeToDo as removeAction } from './actions';
import { connect } from 'react-redux';

class InputToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  render() {
    const { addToDo, removeToDo, selected } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={ () => addToDo(textTodo) } />
        <input id="btnRemove"data-testid="id-remove" type="button" value="Remover" onClick={ () => removeToDo(selected) } disabled={ selected.length === 0 } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToDo: (toDo) => dispatch(addAction(toDo)),
  removeToDo: (toDo) => dispatch(removeAction(toDo)),
});

const mapStateToProps = (state) => ({
  selected: state.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);

InputToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
  selected: PropTypes.string,
};

InputToDo.defaultProps = {
  selected: '',
};
