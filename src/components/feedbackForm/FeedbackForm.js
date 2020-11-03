import React from 'react';
import ReactDOM from 'react-dom';
import PhoneField from "./PhoneField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import FormButtons from "./FormButtons";

class FeedbackForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phoneValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }

    this.removeLayer = this.removeLayer.bind(this);
    this.phoneValidation = this.phoneValidation.bind(this);
  }

  removeLayer(event){
    event.stopPropagation();
    if(event.target.classList[0] === 'feedback-form-layer'){
      this.props.hideForm();
    }
  }

  phoneValidation(event){
    const regexMatch = event.target.value.match(/\d{7,}/);
    if((regexMatch != null) && (regexMatch[0] === event.target.value)){
      this.setState({
        phoneValid: true
      })
    }else {
      this.setState({
        phoneValid: false
      })
    }
  }

  render() {
    return(
      <div className="feedback-form-layer">
        <form className="form-wrapper" action="" id="reg-form">
          <span className="form-title">Registration form</span>
          <PhoneField validation={this.phoneValidation} isValid={this.state.phoneValid}/>
          <EmailField />
          <PasswordField />
          <FormButtons activeSubmit={this.state.formValid} closeForm={this.props.hideForm}/>
        </form>
      </div>
    );
  }
}

export default FeedbackForm;