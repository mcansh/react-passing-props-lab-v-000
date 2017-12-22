import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = ({ filters, handleFilterChange, fruit, currentFilter }) => (
  <div className="fruit-basket">
    <Filter filters={filters} handleChange={handleFilterChange} />
    <FilteredFruitList fruit={fruit} filter={currentFilter} />
  </div>
);

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

FruitBasket.propTypes = {
  fruit: PropTypes.array,
  filters: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func
};

export default FruitBasket;
