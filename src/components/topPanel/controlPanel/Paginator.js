import React from 'react';
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

class Paginator extends React.Component {
  render() {
    let previousButton, nextButton;

    if (this.props.currentPage > 1) {
      previousButton = <PreviousButton handler={this.props.prevHandler}/>;
    } else {
      previousButton = null;
    }

    if(this.props.hasNext){
      nextButton = <NextButton handler={this.props.nextHandler}/>
    } else {
      nextButton = null;
    }

    return (
      <div className="pagination-wrapper">
        {previousButton}
        <div className="pagination__page-indicator">{this.props.currentPage}</div>
        {nextButton}
      </div>
    );
  }
}

export default Paginator;