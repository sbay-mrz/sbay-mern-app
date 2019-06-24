import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ned from './../assets/nedlogo.jpg';
import cart from './../assets/cart.png';
import {connect} from 'react-redux';


import { removeFromCart,addToCart } from '../actions/PostActions';

 class Slider3 extends Component {
    componentDidMount(){
            console.log(this.props.cartcounter);
        const one = document.querySelector('#one');
        one.addEventListener('click', (e)=>{
            one.parentElement.classList.toggle('active');
        })
    }
  render() {
    return (
      <div>
          <div className="myNavbar">
       
        
            <span className="toggle" id="one">
            <i className="fas fa-bars"></i>
            </span>
           
        <Link to="" className="brand">
            Sbay
            <img src={ned} alt="ned" height="50" style={{borderRadius: '50%'}}/>
            
        </Link>
          
          
    <div className="left" style={{paddingTop: '10px'}}>
        <Link to="/" className="link">Home</Link>
        <Link to="/customerLogin" className="link">New Product</Link>
      
           
       
       
        
    {/* <Link to="" className="link">Pricing</Link>*/}
       {/* <Link to="" className="link">Demo</Link>*/}
       {/*
       <Link to="/contactus" className="link">Contact</Link>
      <Link to ="" className="nav-search">
    <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div class="input-group-append">
         <button class="btn btn-outline-secondary" type="button" id="button-addon2"><span className="search-button"><i class="fas fa-search"></i></span></button>
        </div>
      </div>
        </Link>*/}
    </div>

    <div className="right" style={{paddingTop: '10px'}}>
    {/* <Link to="/cart" className="toggle"> <img src={cart} width="100px" height="50px" alt="cart"/></Link>  */}
        <Link to="/sellerLogin" className="link"><span className="nav-icon"><i class="fas fa-camera"></i></span><span>SELL</span></Link>
        
        <Link to="/cart" className="link" > <span className="nav-icon"><i class="fas fa-shopping-cart"></i></span>{this.props.cartCounter}  </Link>
        <Link to="/sellerlogin" className="link"><span className="nav-icon"><i class="fas fa-user"></i></span></Link>

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