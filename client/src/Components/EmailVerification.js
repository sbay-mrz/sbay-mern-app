import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';



class EmailVerification extends Component {

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
        axios.post(`https://sbay-mrz.herokuapp.com/sellers/emailVerification?email=${userObject.email}&password=${userObject.password}&name=${userObject.name}&address=${userObject.address}&contact=${userObject.contact}`,userObject)
          .then(res => {
            console.log("users are : ",res.data);
          })
          
      }

    render() {
        return (
            <div>
                <h1> hello </h1>
            </div>
        );
    }
}

export default EmailVerification;