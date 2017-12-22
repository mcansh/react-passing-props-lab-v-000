import React from 'react';
import PropTypes from 'prop-types';

const FilteredFruitList = props => {
  const list =
    !props.filter || props.filter === 'all'
      ? props.fruit
      : props.fruit.filter(i => i.fruit_type === props.filter);
  return (
    <ul className="fruit-list">
      {list.map((fruit, i) => <li key={i}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

FilteredFruitList.propTypes = {
  fruit: PropTypes.array,
  filter: PropTypes.string
};

export default FilteredFruitList;
