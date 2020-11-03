import React from 'react';

class FormButtons extends React.Component {

  render() {
    let submitButton;

    if (this.props.activeSubmit) {
      submitButton = <button
        className="form__submit-button disabled"
        form="reg-form">Submit</button>;
    } else {
      submitButton = <button
        className="form__submit-button disabled"
        form="reg-form"
        disabled="disabled">Submit</button>
    }

    return (
      <span className="form__buttons-wrapper">
        {submitButton}
        <button
          className="form__cancel-button"
          type="button"
          onClick={this.props.closeForm}>Cancel</button>
      </span>
    );
  }
}

export default FormButtons;