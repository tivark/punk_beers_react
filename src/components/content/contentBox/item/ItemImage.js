import React from 'react';

class ItemImage extends React.Component {

  render() {
    return (
      <div className="beer-item__image-wrapper">
        <img className="beer-item__image" src={this.props.imageUrl}/>
      </div>
    )
  }
}

export default ItemImage;