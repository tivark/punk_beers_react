import React from 'react';
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

class Paginator extends React.Component {
  render() {
    return (
      <div className="pagination-wrapper">
        <PreviousButton/>
        <div className="pagination__page-indicator">3</div>
        <NextButton/>
      </div>
    );
  }
}

export default Paginator;