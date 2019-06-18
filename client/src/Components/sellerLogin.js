import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button,Grid,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';


class Login extends Component {
constructor(){
    super();
    this.state = {
        users: [],
        password: '',
        email: '',
        activeUser: {}
    }
    this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);

}

componentDidMount() {

    axios.get("http://localhost:7000/sellers/getsellers")
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
        let array = Object.values(users);
        this.setState({ users: array });
      })
      
  }


  gotoLogin(e) {
      
    e.preventDefault();
    console.log("hello", this.state.email, this.state.password);
   
    axios.get(`http://localhost:7000/sellers/${this.state.email}&${this.state.password}`)
    .then(res => {
        console.log(res)
        if(res.data.userStatus === "exist"){
        this.props.history.push(`/sellerProfile/${res.data.user._id}`);
        }
        else{
            alert("authentication failed");
        }
    });

  }
  

    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getPassword(e){
    this.setState({ password: e.target.value})
    }
    render() {
        console.log(this.state.users)
        return (
            <div >
            <div class="login-logo">
      <i class="fas fa-globe"></i>
      <p>sBay</p>
  </div>
    <div class="LogInParent ">
       <section  class="login-screen-section1">
        <h1>Good to see you again!</h1>
        <p>Login to manage your bookings</p>
       </section>
       <form  onSubmit={this.gotoLogin}>
         <section  class="login-screen-section2"> 
          
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon2"><i class="far fa-envelope"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" onChange={this.getEmail}/>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3"><i class="fas fa-lock"></i></span>
                </div>
                <input type="password" class="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon3" onChange={this.getPassword}/>
              </div>
         </section>
        
          
          <section  class="login-screen-section3">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
            <Link to="/sellerSighnup">  <p class="secondpara">Don't have an account <span>SignUp?</span> here</p></Link>
            <Link to="/forgotPassword"> forgotPassword</Link>
          </section>
        </form>
    </div> 
    
            </div>
        );
    }
}

export default Login;
