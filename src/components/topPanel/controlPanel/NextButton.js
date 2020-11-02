import React from 'react';

class NextButton extends React.Component{
  render(){
    return(
      <div className="next-button-wrapper">
        <button className="pagination__next-button">Next Page</button>
      </div>
    );
  }
}

export default NextButton;