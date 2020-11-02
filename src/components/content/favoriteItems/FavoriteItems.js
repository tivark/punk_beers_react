import React from 'react';
import ClearButton from "./ClearButton";
import FavoriteItem from "./FavoriteItem";

class FavoriteItems extends React.Component{

  render() {
    let clearButton, storageItems;

    if(Object.keys(localStorage).length !== 0) {
      clearButton = <ClearButton contentRender={this.props.contentRender}/>

      storageItems = Object.keys(localStorage).map((key) => {
        return (<FavoriteItem
          name={localStorage.getItem(key)}
          id={key} key={key}
          contentRender={this.props.contentRender}
        />);
      })
    }

    return(
      <div className="favorite-items-wrapper">
        <div className="favorite-items__title">Favorites</div>
        {storageItems}
        {clearButton}
      </div>
    );
  }
}

export default FavoriteItems;