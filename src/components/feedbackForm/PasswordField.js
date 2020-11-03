import React from 'react';

class PasswordField extends React.Component{
  render() {
    return(
      <div className="password-field">
        <label className="password__label" htmlFor="password">Password</label>
        <input
          className="password__text"
          id="password"
          placeholder="Enter your password"
          type="password" />
          <span className="password__prompt">At least 6 characters.</span>
      </div>
    );
  }
}

export default PasswordField;