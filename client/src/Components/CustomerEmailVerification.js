import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';



class CustomerEmailVerification extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let userObject = {
             name:parsed.name,
            email: parsed.email,
            password: parsed.password,
            contact: parsed.contact,
            address: parsed.address,
            
          }

        console.log(parsed.email)
        axios.post(`https://sbay-mrz.herokuapp.com/customers/emailVerification?email=${userObject.email}&password=${userObject.password}&name=${userObject.name}&address=${userObject.address}&contact=${userObject.contact}`,userObject)
          .then(res => {
            console.log("users are : ",res.data);
          })
          
      }

    render() {
        return (
            <div>
                <h3> your email has been verified successfully, you can now login. </h3>
            </div>
        );
    }
}

export default CustomerEmailVerification;