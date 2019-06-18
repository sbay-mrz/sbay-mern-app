import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Slider3 from './slider3';


class MyRequests extends Component {

    constructor(props){
        super(props);
        this.state = {
            customerRequests: []
        }

    }


    componentDidMount(){
        const { custReqid } = this.props.match.params;
console.log("customer  ",custReqid)
        axios(`https://sbay-mrz.herokuapp.com/newRequest/getnew/${custReqid}`)
        .then(res =>{
            const user = res.data;
            this.setState({ customerRequests: user });
            console.log("",user)
        })
    }
    render() {
        let {customerRequests} = this.state
        return (
            <div>
                <Slider3/>
                <h2> My Requests</h2>
                {customerRequests.map((obj)=>{
                    return(
                        <div> 
                            <Card style={{width: '250px',height: '120px', marginBottom: '100px',marginLeft: '200px'}}> 
                            <p>Description : {obj.newSoftwareDescription} </p>
                            <p>Category:  {obj.category} </p>   
                            <p>Budget: {obj.budget} </p>   

                            </Card>
                        
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MyRequests;