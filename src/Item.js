import React from 'react';
import PropTypes from 'prop-types';
import { selectToDo } from './actions';
import { connect } from 'react-redux';

function Item(props) {
  const { content, selectToDo } = props;
  return (
    <div className="Item" onClick={ () => selectToDo(content) }>
      {content}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectToDo: (toDo) => dispatch(selectToDo(toDo)),
});

export default connect(null, mapDispatchToProps)(Item);

Item.propTypes = {
  content: PropTypes.string.isRequired,
  selectToDo: PropTypes.func.isRequired,
}
