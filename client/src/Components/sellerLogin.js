import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button,Grid,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import {setUserToken} from './../actions/PostActions';
import {connect} from 'react-redux';
import Slider3 from './slider3';
import Particles from "./Particles"
// const styles = {
//   root: {
//     fontFamily: "sans-serif",
   
//     height: "100%",
//     background: "white",
//     display: "flex",
//     flexDirection:"column",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// };

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
  var user= JSON.parse(localStorage.getItem('userProfile'));
  if(localStorage.getItem('userProfile')){
    this.props.history.push(`sellerProfile/${user._id}`)
  }

    axios.get("https://sbay-mrz.herokuapp.com/sellers/getsellers")
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
   
    axios.get(`https://sbay-mrz.herokuapp.com/sellers/${this.state.email}&${this.state.password}`)
    .then(res => {
        console.log(res)
        if(res.data.userStatus === "exist"){
          let userProfile = {
            _id: res.data.user._id,
            type: 'seller'
          }
          localStorage.setItem('userProfile',JSON.stringify(userProfile));
          this.props.setUserToken(true);
          console.log("user status",this.props.status)
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
            <div  >
            <Slider3/>
           <div >
           <Particles className="hide"/>
          <section className="backgroundParticle" id="myDiv">
          <div class="login-logo" >
          <i class="fas fa-globe"></i>
          <p>sBay</p>
      </div>
      
        <div class="LogInParent ">
           <section  class="login-screen-section1">
            <h1>Good to see you again!</h1>
            <p>Login to manage your Account</p>
           </section>
           <form  onSubmit={this.gotoLogin}>
             <section  class="login-screen-section2"> 
              
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon2"><i class="far fa-envelope"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" onChange={this.getEmail} required/>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3"><i class="fas fa-lock"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon3" onChange={this.getPassword} required/>
                  </div>
             </section>
            
              
              <section  class="login-screen-section3">
                <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
                <Link to="/sellerSighnup">  <p class="secondpara">Don't have an account <span>SignUp?</span> here</p></Link>
                <Link to="/forgotPassword"> forgotPassword</Link>
              </section>
            </form>
          
        </div> 
          </section>
    
   </div>
  
            </div>
        );
    }
}

const mapStateToProps = (state,dispatch) => ({
status: state.posts.status
})

export default connect(mapStateToProps, {setUserToken})(Login);
