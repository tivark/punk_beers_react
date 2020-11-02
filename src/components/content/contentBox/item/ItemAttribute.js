import React from 'react';

class ItemAttribute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="beer-item__attribute">
        <span className="beer-item__attribute-name">{this.props.type}</span>
        <span className="beer-item__attribute-value">{this.props.value}</span></div>
    );
  }
}

export default ItemAttribute;