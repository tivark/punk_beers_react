import React from 'react';
import SortControl from "./SortControl";
import Paginator from "./Paginator";

class ControlPanel extends React.Component {
  render() {
    return (
      <div className="top-panel__control-box">
        <SortControl/>
        <Paginator/>
      </div>
    );
  }
}

export default ControlPanel;