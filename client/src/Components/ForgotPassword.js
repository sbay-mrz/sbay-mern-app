/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Button, CardContent } from '@material-ui/core';
import pass from './../assets/forgotpassword.jpg';
import Card from '@material-ui/core/Card';
import Slider3 from './slider3';
import Particles from "./Particles";


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


  getEmail(e){
this.setState({email: e.target.value});
  }




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
<div>
<Slider3/>
 <div>
 <div >
           <Particles className="hide"/>
          <section className="backgroundParticle" id="myDiv">
            <div className="forgot-parent">
<Card className="forgot-password"  > 

 <form onSubmit={this.sendEmail}>
 <p> Enter your email for password recovery </p>
 <div class="input-group mb-3">
 
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon2"><i class="far fa-envelope"></i></span>
                </div>
                <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" onChange={this.getEmail.bind(this)} required/>
              </div>

          <Button type="submit" color="primary" variant="contained"> send password reset email </Button>
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
        </Card>
        </div>
        </section>
      </div>


</div>
      </div>
    );
  }
}

export default ForgotPassword;




