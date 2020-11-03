import React from 'react';

class EmailField extends React.Component{
  render() {
    return (
      <div className="e-mail-field"><label className="e-mail__label" htmlFor="e-mail">E-mail</label>
        <input className="e-mail__text" id="e-mail" placeholder="Enter your e-mail" />
        <span className="e-mail__prompt">Enter your valid e-mail.</span>
      </div>
    );
  }
}

export default EmailField;