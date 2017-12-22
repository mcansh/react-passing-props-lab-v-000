import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  };

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(blob => blob.json())
      .then(filters => this.setState({ filters }));
  };

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(blob => blob.json())
      .then(fruit => this.setState({ fruit }));
  };

  handleFilterChange = e => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    const { fruit, filters, currentFilter } = this.state;
    return (
      <FruitBasket
        fruit={fruit}
        filters={filters}
        currentFilter={currentFilter}
        handleFilterChange={this.handleFilterChange}
      />
    );
  }
}

export default App;
