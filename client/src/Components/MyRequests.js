import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Slider3 from './slider3';
import Loader from 'react-loader-spinner';




class MyRequests extends Component {

    constructor(props){
        super(props);
        this.state = {
            customerRequests: [],
            customercustomization: []
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

        axios(`https://sbay-mrz.herokuapp.com/customRequest/getcustom/${custReqid}`)
        .then(res =>{
            const user = res.data;
            this.setState({ customercustomization: user });
            console.log("",user)
        })


}


    render() {
        let {customerRequests,customercustomization} = this.state;
       
        if(customercustomization === undefined || customercustomization.length == 0){
            return (
        
                <div style={{display: 'flex',justifyContent: 'center',marginTop: '200px'}}>
<Loader type="ThreeDots" color="#057DB5" height={150} width={80} />
                    </div>
                    )
        }
        else

        return (
        
            <div>
              
                <Slider3/>
                <h2>  New Requests</h2>
                {
                    customerRequests.map((obj)=>{
                    return(
                        <div> 
                            <Card style={{width: '250px',height: '120px', marginBottom: '100px',marginLeft: '200px'}}> 
                            <p>Description : {obj.newSoftwareDescription} </p>
                            <p>Category:  {obj.category} </p>   

                            </Card>
                        
                        </div>
                    )
                })
                }

<h2> Customization Requests</h2>

                {customercustomization.map((obj)=>{
                    return(
                        <div> 
                            <Card style={{width: '300px',height: '150px', marginBottom: '100px',marginLeft: '200px'}}> 
                            <p>Description : {obj.cuzDescription} </p>
                            <p>Nmae : {obj.productName} </p>
                            <p>Category : {obj.productCategory} </p>
                            
                            </Card>
                        
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default MyRequests;