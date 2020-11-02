import React from 'react';
import ControlPanel from "./controlPanel/ControlPanel";
import FeedbackPanel from "./feedbackPanel/FeedbackPanel";

class TopPanel extends React.Component {

  render() {
    return (
      <div className="top-panel">
        <ControlPanel
          currentPage={this.props.currentPage}
          hasNext={this.props.hasNext}
          nextHandler={this.props.nextHandler}
          prevHandler={this.props.prevHandler}
          sortMethods={this.props.sortMethods}
        />
        <FeedbackPanel/>
      </div>
    )
  }
}

export default TopPanel;