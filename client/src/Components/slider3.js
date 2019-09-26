import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ned from './../assets/logo1.jpeg';
import cart from './../assets/cart.png';
import {connect} from 'react-redux';

import { removeFromCart,addToCart } from '../actions/PostActions';
import { Button } from '@material-ui/core';

 class Slider3 extends Component {
   constructor(props){
     super(props);
     this.postproduct=this.postproduct.bind(this);
   }
    componentDidMount(){
  

            console.log(this.props.cartcounter);
        const one = document.querySelector('#one');
        one.addEventListener('click', (e)=>{
            one.parentElement.classList.toggle('active');
            
            
        })
      
    }


    postproduct(){
      var user= JSON.parse(localStorage.getItem('userProfile'));
      console.log(user._id);
      if(localStorage.getItem('userProfile')){
        this.props.history.push("postproduct/"+user._id)
      }
    }
  render() {
    let user = JSON.parse(localStorage.getItem('userProfile'));
    let usertypecust = 'default';
    let usertypeseller = 'default';
    if(user){
      if(user.type === 'seller'){
         
         usertypecust = user.type;
      }
      else if(user.type === 'customer'){
        usertypeseller = user.type;
     }
    }
   
    // console.log(usertype)
    return (
      <div>
          <div className="myNavbar" >
       
        
            <span className="toggle" id="one">
            <i className="fas fa-bars"></i>
            </span>
           
        <Link to="" className="brand"><span className="bra">Sbay</span>
           
            {/*<img src={ned} alt="ned" height="50" style={{borderRadius: '50%'}}/>*/}
            
        </Link>
          
          
    <div className="left" >
        <Link to="/" className="link "><span className="nav-icon" >Home</span></Link>
       {usertypecust === 'default' && <Link to="/customerLogin" className="link"><span className="nav-icon" ><i class="fas fa-user"></i></span> Customer</Link>
       }
    </div>

    <div className="right">
    {/* <Link to="/cart" className="toggle"> <img src={cart} width="100px" height="50px" alt="cart"/></Link>  */}
     
         
         {/* <Button onClick={this.postproduct} className="link"><span>SELL</span></Button> */}
     
        <Link to="/cart" className="link" > <span className="nav-icon"><i class="fas fa-shopping-cart"></i></span>{this.props.cartCounter}  </Link>
        { usertypeseller === 'default' && <Link to="/sellerlogin" className="link"><span className="nav-icon"><i class="fas fa-user"></i></span> Seller</Link>
       } 
    </div>

</div>
      </div>
    )
  }
}

const mapStateToProps = (state,dispatch) => ({
    cartCounter: state.posts.cartCounter
  })
  
   export default connect(mapStateToProps)(Slider3);

  
// <img src={cart} height={30} alt="cart"/> 