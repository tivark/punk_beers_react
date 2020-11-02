import React from 'react';

class FavoriteButton extends React.Component {
  render() {
    return (
      <div className="beer-item__favorite-button" onClick={this.props.handler}>Add to favorite</div>
    )
  }
}

export default FavoriteButton;