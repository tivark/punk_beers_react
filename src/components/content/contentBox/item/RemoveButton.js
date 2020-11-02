import React from 'react';

class RemoveButton extends React.Component {
  render() {
    return (
      <div className="beer-item__favorite-button in-storage" onClick={this.props.handler}>Remove from favorites</div>
    )
  }
}

export default RemoveButton;