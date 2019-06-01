import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
class Header2 extends React.Component{
    constructor(props){
        super(props);
        this.myFunction =this.myFunction.bind(this);
    }
   myFunction () {
        let x = document.getElementById("myTopnav");
        if (x.className === "StyleHead") {
            x.className += " MobileHaeder"
        } else {
            x.className = "StyleHead"
        }
        console.log("helo");
    }
    render()
    {
        return (
            
           
                     <div className= "StyleHead" id="myTopnav">
                     
                     

                        <div className="UpperHeader">
                        <p>About</p>
                        <p>Home</p>
                        <p>CMS</p>
                        
                         </div>
                   
                        <div className="LowerHeader">
                        <div onClick={this.myFunction}><i class="fas fa-bars"></i></div>
                             <div className="BrandName">
                      
                             <p>Sbay</p>
                            </div>
                            
                            <div className="input-group mb-3 show">
                                 <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                 <div class="input-group-append">
                                 <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                                 </div>
                            </div> 
                           <div> <Link to="/sellerLogin"> <button type="button" class="btn btn-outline-primary">Login</button> </Link> </div>
                          <div> <Link to="/sellerSighnup"> <button type="button" class="btn btn-link">Become Seller</button> </Link> </div>
                         
                         </div>
                         
                    

                         
                    </div>
                    
                    
                    
            
        )
    }
}


export default Header2