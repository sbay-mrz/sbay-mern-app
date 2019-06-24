import React from 'react';
import '../App.css';


class ExtraContent extends React.Component{
    render(){
        return(
            <div className="extra-one">
            <div className="extra-one-heading"><p>JOIN OUR EMAIL</p></div>
            <div className="extra-one-text"><p>Sign up for our monthly promotion and get out latest product news!</p></div>
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">subscribe</button>
  </div>
</div>
           
            </div>
        )
    }
}
export default ExtraContent