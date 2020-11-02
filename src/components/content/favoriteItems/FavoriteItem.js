import React from 'react';

class FavoriteItem extends React.Component{
  render(){
    return(
      <div className="favorite-item">
        <div className="favorite-item__name">Baby Dogma</div>
        <div className="favorite-item__delete-button"></div>
      </div>
    );
  }
}

export default FavoriteItem;