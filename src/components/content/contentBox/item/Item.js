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
    this.props.contentRender();
  }

  removeFromFavorite(){
    localStorage.removeItem(this.props.item.id);
    this.setState({favorite:false});
    this.props.contentRender();
  }

  render() {
    const {item} = this.props;

    let button;
    if (item.id in localStorage){
      button = <RemoveButton handler={this.removeFromFavorite.bind(this)} />
    } else {
      button = <FavoriteButton handler={this.addToFavorite.bind(this)}/>
    }
    return (
      <div className="beer-item">
        <ItemImage imageUrl={item['image_url']} />
        <div className="beer-item__name">{item.name}</div>
        <div className="beer-item__contributor">{item.contribution}</div>
        <ItemAttribute type="ABV" value={item.abv} />
        <ItemAttribute type="IBU" value={item.ibu}  />
        <ItemDescription text={item.description}/>
        {button}
      </div>
    )
  }
}

export default Item;