import React from 'react';
import FeedbackForm from "../../feedbackForm/FeedbackForm";

class FeedbackPanel extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm(){
    this.setState({
      showForm: false
    })
  }

  showForm(){
    this.setState({
      showForm: true
    })
  }

  render() {
    let formLayer;
    if(this.state.showForm){
      formLayer = <FeedbackForm hideForm={this.hideForm}/>
    } else {
      formLayer = null;
    }
    return(
      <div className="top-panel__feedback-box">
        <div className="feedback-button" onClick={this.showForm}>Feedback</div>
        {formLayer}
      </div>
    );
  }
}

export default FeedbackPanel;