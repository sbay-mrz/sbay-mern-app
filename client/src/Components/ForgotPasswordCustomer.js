/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Button } from '@material-ui/core';

class ForgotPasswordCustomer extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();
    const { email } = this.state;
    console.log("myemail",email);

    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      axios
        .post('https://sbay-server.herokuapp.com/customers/forgotPassword', {
          email,
        })
        .then((response) => {
            console.log("response",response)
    
            console.log(response.data);
          if (response.data === 'recovery email sent') {
            this.setState({
              showError: false,
              messageFromServer: 'recovery email sent',
              showNullError: false,
            });
          }
        })
        .catch((error) => {
          console.error(error.response.data);

          if (error.response.data === 'email not in db') {
            this.setState({
              showError: true,
              messageFromServer: '',
              showNullError: false,
            });
          }
        });
    }
  };

  render() {
    const {
 email, messageFromServer, showNullError, showError 
} = this.state;

    return (
      <div>
        <form className="profile-form" onSubmit={this.sendEmail}>
          <TextField
            // style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email Address"
          />
          {/* <SubmitButtons
            buttonStyle={forgotButton}
            buttonText="Send Password Reset Email"
          /> */}
          <Button type="submit"> send password reset email </Button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
          
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
      </div>
    );
  }
}

export default ForgotPasswordCustomer;
