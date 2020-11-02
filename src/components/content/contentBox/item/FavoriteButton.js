import React from 'react';

class FavoriteButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {buttonText: 'Add to favorite'};
  }
  render(){
    return(
    <div className="beer-item__favorite-button">{this.state.buttonText}</div>
    )
  }
}

export default FavoriteButton;