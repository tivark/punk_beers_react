import React from 'react';

class PhoneField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      valid: '0'
    }

    this.inputText = this.inputText.bind(this);
  }

  inputText(event) {
    const text = event.target.value;
    this.setState(
      {textValue: text}
    )
  }

  render() {
    let validDecoration;
    if (this.props.isValid) {
      validDecoration = "phone-number__text valid_field"
    } else {
      validDecoration = "phone-number__text invalid_field"
    }
    return (
      <div className="phone-number-field">
        <label className="phone-number__label" htmlFor="phone-number">Phone number</label>
        <input
          className={validDecoration}
          id="phone-number"
          placeholder="Enter your phone number"
          onChange={this.inputText}
          value={this.state.textValue}
          onBlur={this.props.validation}
        />
        <span className="phone-number__prompt">Min 7 digits.</span>
      </div>
    );
  }
}

export default PhoneField;