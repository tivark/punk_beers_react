import React from 'react';
import ItemAttribute from "./ItemAttribute.js";
import ItemImage from "./ItemImage.js";
import ItemDescription from "./ItemDescription.js";
import FavoriteButton from "./FavoriteButton";
import RemoveButton from "./RemoveButton";

class Item extends React.Component {

  addToFavorite(){
    localStorage.setItem(this.props.item.id, this.props.item.name);
    this.setState({favorite:true});
  }

  removeFromFavorite(){
    localStorage.removeItem(this.props.item.id);
    this.setState({favorite:false});
  }

  render() {
    let button;
    if (this.props.item.id in localStorage){
      button = <RemoveButton handler={this.removeFromFavorite.bind(this)} />
    } else {
      button = <FavoriteButton handler={this.addToFavorite.bind(this)}/>
    }
    return (
      <div className="beer-item">
        <ItemImage imageUrl={this.props.item['image_url']} />
        <div className="beer-item__name">{this.props.item.name}</div>
        <div className="beer-item__contributor">{this.props.item.contribution}</div>
        <ItemAttribute type="ABV" value={this.props.item.abv} />
        <ItemAttribute type="IBU" value={this.props.item.ibu}  />
        <ItemDescription text={this.props.item.description}/>
        {button}
      </div>
    )
  }
}

export default Item;