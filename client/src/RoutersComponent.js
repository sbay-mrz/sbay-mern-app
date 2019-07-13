import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import MobileApp from './Components/MobileApp';
import WebApp from './Components/WebApp'; 
import VrAr from './Components/VrAr';
import Ecommerce from './Components/Ecommerce';
import InternetOfThings from './Components/InternetOfThings';
import ArtficialIntelligence from './Components/ArtificialIntelligence';
import sellerLogin from './Components/sellerLogin';
import sellerSignup from './Components/sellerSignup';
import customerLogin from './Components/customerLogin';
import customerSignup from './Components/customerSignup';
import sellerProfile from './Components/sellerProfile';
import customerProfile from './Components/customerProfile';
import ProductDescription from './Components/ProductDescription';
import Contactus from './Components/ContactUs';
import Cart from './Components/Cart';
import sellPage from './Components/sellPage';
import PostProduct from './Components/PostProduct';
import NewProductRequest from './Components/NewProductRequest';
import SellerProducts from './Components/SellerProducts';
import MyRequests from './Components/MyRequests';
import ResetPassword from './Components/ResetPassword';
import ResetPasswordCustomer from './Components/ResetPasswordCustomer';
import ForgotPassword from './Components/ForgotPassword';
import ForgotPasswordCustomer from './Components/ForgotPasswordCustomer';
import AccountVerification from './Components/AccountVerification';
import EmailVerification from './Components/EmailVerification';
import CustomerEmailVerification from './Components/CustomerEmailVerification';
import ProductCustomize from './Components/ProdcutCustomize';

export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>   
        <Route  path="/mobileapp" component={MobileApp}/>    
        <Route  path="/webapp" component={WebApp}/>  
        <Route  path="/vrar" component={VrAr}/>  
        <Route  path="/ecommerce" component={Ecommerce}/>  
        <Route  path="/internetofthings" component={InternetOfThings}/>  
        <Route  path="/artificialintelligence" component={ArtficialIntelligence}/>  
     
        <Route path="/sellerLogin" component={sellerLogin}/> 
      
        <Route path="/sellerSighnup" component={sellerSignup}/> 
        <Route path="/customerSignup" component={customerSignup}/> 
        <Route path="/customerLogin" component={customerLogin}/> 
        
           
     
        <Route path="/sellerProfile/:id" component={sellerProfile}/> 
        
        <Route path="/customerProfile/:id" component={customerProfile}/> 
        <Route path="/productDescription/:myid" component={ProductDescription}/> 
        <Route path="/cart" component={Cart}/> 
        <Route path="/contactus" component={Contactus}/> 
        <Route path="/sell" component={sellPage}/> 
        <Route path="/postproduct/:proid" component={PostProduct}/> 
        <Route path="/productCustomize/:prodID" component={ProductCustomize}/> 
        <Route path="/sellerProducts/:spid" component={SellerProducts}/> 
        <Route path="/Myrequests/:custReqid" component={MyRequests}/> 
        <Route path="/newProductRequest/:cusNewReqId" component={NewProductRequest}/> 
        <Route path = "/forgotPassword" component={ForgotPassword}/>
        <Route path = "/reset/:token" component={ResetPassword}/>
        <Route path ="/sellerupdate/:updatedSellersId" component={ResetPassword}/>
        <Route path = "/forgotPasswordCustomer" component={ForgotPasswordCustomer}/>
        <Route path = "/resetcustomer/:token" component={ResetPasswordCustomer}/>
        <Route path = "/customerupdate/:updatedCustomersId" component={ResetPasswordCustomer}/>
        <Route path = "/accountverification/:token" component={AccountVerification}/>        
        <Route path = "/verificationSeller" component={EmailVerification}/>    
        <Route path = "/verificationCustomer" component={CustomerEmailVerification}/>       
              
 
    
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
