import React from 'react';

class ClearButton extends React.Component {
  render() {
    return (
      <div className="favorite-items__clear-button" onClick={() => {
        localStorage.clear()
        this.props.contentRender();
      }}>Clear list</div>
    )
  }
}

export default ClearButton;