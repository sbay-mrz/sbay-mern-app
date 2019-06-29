import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';



class EmailVerification extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let userObject = {
            email: parsed.email,
            password: parsed.password,
          }

        console.log(parsed.email)
        axios.post(`http://localhost:7000/sellers/verificationseller?email=${userObject.email}&password=${userObject.password}`,userObject)
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