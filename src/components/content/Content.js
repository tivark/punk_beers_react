import React from 'react';
import Items from "./contentBox/Items";
import FavoriteItems from "./favoriteItems/FavoriteItems";

class Content extends React.Component {

  render() {
    return (
      <div className="content-body">
        <Items items={this.props.items}/>
        <FavoriteItems />
      </div>
    );
  }
}

export default Content;