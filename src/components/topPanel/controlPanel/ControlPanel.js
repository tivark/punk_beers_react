import React from 'react';
import SortControl from "./SortControl";
import Paginator from "./Paginator";

class ControlPanel extends React.Component {
  render() {
    return (
      <div className="top-panel__control-box">
        <SortControl sortMethods={this.props.sortMethods}/>
        <Paginator
          currentPage={this.props.currentPage}
          hasNext={this.props.hasNext}
          nextHandler={this.props.nextHandler}
          prevHandler={this.props.prevHandler}
        />
      </div>
    );
  }
}

export default ControlPanel;