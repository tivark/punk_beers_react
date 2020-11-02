import React from 'react';

class SortControl extends React.Component {
  render() {
    return (
      <div className="sort-block">
        <div className="abv-sort-wrapper">
          <span className="abv-sort__text">Sort by abv</span>
          <span className="sort-buttons-wrapper">
            <button className="abv-sort__button-asc"></button>
            <button className="abv-sort__button-desc"></button>
          </span>
        </div>
        <div className="ibu-sort-wrapper">
          <span className="ibu-sort__text">Sort by ibu</span>
          <span className="sort-buttons-wrapper">
            <button className="ibu-sort__button-asc"></button>
            <button className="ibu-sort__button-desc"></button>
          </span>
        </div>
      </div>);
  }
}

export default SortControl;