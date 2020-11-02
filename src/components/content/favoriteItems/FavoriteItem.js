import React from 'react';

class FavoriteItem extends React.Component{
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(){
    localStorage.removeItem(this.props.id);
    this.props.contentRender();
  }
  render(){
    return(
      <div className="favorite-item">
        <div className="favorite-item__name">{this.props.name}</div>
        <div className="favorite-item__delete-button" onClick={this.removeItem}></div>
      </div>
    );
  }
}

export default FavoriteItem;