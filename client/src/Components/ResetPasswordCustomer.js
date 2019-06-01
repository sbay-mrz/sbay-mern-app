import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';



const loading = {
  margin: '1em',
  fontSize: '24px',
};


export default class ResetPasswordCustomer extends Component {
  constructor() {
    super();

    this.state = {
      userId: '',
      id: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.token);
    await axios
      .get(`http://localhost:7000/customers/reset/${this.props.match.params.token}`)
      .then((response) => {
        console.log("hello response ",response.data);
        if (response.data.message === 'password reset link a-ok') {
          this.setState({
            userId: response.data.userId,
            updated: false,
            isLoading: false,
            error: false,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        this.setState({
          updated: false,
          isLoading: false,
          error: true,
        });
      });
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = (e) => {
    e.preventDefault();
   
    axios
      .patch(`http://localhost:7000/customers/customerupdate/${this.state.userId}`, {
        password: this.state.password
      })
      .then((response) => {
        console.log("helllo",response.data);
        if(response.data.message === 'password updated') {
          this.setState({
            updated: true,
            error: false,
          });
        } else {
          this.setState({
            updated: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
console.log("dekho dekho",this.state.password)
    const {
 password, error, isLoading, updated 
} = this.state;

    // if (error) {
    //   return (
    //     <div>
    //       <div style={loading}>
    //         <h4>Problem resetting password. Please send another reset link.</h4>
    //         <Link to="/"> go home </Link>
             
    //         {/* <LinkButtons
    //           buttonStyle={forgotButton}
    //           buttonText="Forgot Password?"
    //           link="/forgotPassword"
    //         /> */}
    //       </div>
    //     </div>
    //   );
    // }
 
    return (
      <div>
        {/* <HeaderBar title={title} /> */}
        <form className="password-form" onSubmit={this.updatePassword}>
          <input
            id="password"
            label="password"
            onChange={this.handleChange('password')}
            value={password}
            type="password"
          />
          <Button type="submit"> send </Button>
          
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
           <Link to="/customerLogin"> customer login </Link>
          </div>
        )}
        <Link to="/"> home  </Link> 
      </div>
    );
  }
}