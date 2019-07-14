/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Button, CardContent } from '@material-ui/core';
import pass from './../assets/forgotpassword.jpg';
import Card from '@material-ui/core/Card';
import Particles from 'react-particles-js';


class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }



componentDidMount(){
  document.body.backgroundColor = 'red';
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
        .post('https://sbay-mrz.herokuapp.com/sellers/forgotPassword', {
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
      <div  className="forgot-password">

<Card style={{width: '300px'}} > 
<CardContent style={{backgroundColor: (255, 255, 255)}}> 

<Particles
   params={{
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#176d94",
          blur: 1
        }
      }
    }
  }}
  style={{
    width: '900px',
    height: '1100px'
  }}
  />
</CardContent>
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
          <br/>
          <hr/>

          <Button type="submit"> send password reset email </Button>
        </form>
<br/>
<hr/>
      
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
        </Card>
        <br/><br/>
       
      </div>
    );
  }
}

export default ForgotPassword;
