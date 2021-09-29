import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, handleClick } = props
  return (
    <div className="Item" onClick={ (e) => handleClick(e) }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
