import React from 'react';
class PreviousButton extends React.Component{
  render(){
    return(
      <div className="prev-button-wrapper">
        <button className="pagination__prev-button">Previous Page</button>
      </div>
    );
  }
}

export default PreviousButton;