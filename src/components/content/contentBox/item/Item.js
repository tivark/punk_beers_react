import React from 'react';
import ItemAttribute from "./ItemAttribute.js";
import ItemImage from "./ItemImage.js";
import ItemDescription from "./ItemDescription.js";
import FavoriteButton from "./FavoriteButton";

class Item extends React.Component {

  render() {
    return (
      <div className="beer-item">
        <ItemImage imageUrl={this.props.item['image_url']} />
        <div className="beer-item__name">{this.props.item.name}</div>
        <div className="beer-item__contributor">{this.props.item.contribution}</div>
        <ItemAttribute type="ABV" value={this.props.item.abv} />
        <ItemAttribute type="IBU" value={this.props.item.ibu}  />
        <ItemDescription text={this.props.item.description}/>
        <FavoriteButton />
      </div>
    )
  }
}

export default Item;