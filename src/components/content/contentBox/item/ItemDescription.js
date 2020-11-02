import React from 'react';

class ItemDescription extends React.Component{
  render(){
    return(
      <div className="beer-item__description">
        <span className="beer-item__description-label">Description:</span>
        <div className="beer-item__description-text">{this.props.text}</div>
      </div>
    )
  }
}

export default ItemDescription;