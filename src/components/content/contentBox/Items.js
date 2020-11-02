import React from 'react';
import Item from "./item/Item";

class Items extends React.Component {



  render() {
    return (
      <div className="items-wrapper">
        {(this.props.items).map((el) => {

          return <Item key={el.id} item={el}/>
        })}
      </div>
    );
  }
}

export default Items;