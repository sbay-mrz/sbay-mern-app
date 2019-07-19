import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';



class EmailVerification extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let userObject = {
            name:encodeURIComponent(parsed.name),
            email: encodeURIComponent(parsed.email),
            password: encodeURIComponent(parsed.password),
            contact: encodeURIComponent(parsed.contact),
            address: encodeURIComponent(parsed.address),
            
          }

        console.log(userObject.address)
        axios.post(`https://sbay-mrz.herokuapp.com/sellers/emailVerification?email=${userObject.email}&password=${userObject.password}&name=${userObject.name}&address=${userObject.address}&contact=${userObject.contact}`,userObject)
          .then(res => {
            console.log("users are : ",res.data);
          })
          
      }

    render() {
        return (
            <div>
                <h3> your email has been verified successfully , now you may login to proceed </h3>
            </div>
        );
    }
}

export default EmailVerification;