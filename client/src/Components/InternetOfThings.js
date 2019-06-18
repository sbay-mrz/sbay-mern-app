import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import iot from '../../src/assets/iot.png';
import Slider3 from './slider3';


export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
        iot: []
    }
}


componentDidMount(){

axios.get(`https://sbay-server.herokuapp.com/products/iot`)
.then(res => {
  const iot = res.data;
  console.log(iot);
  this.setState({ iot });
  
})

}
  render() {
    return (
      <div> 
        <Slider3/>
         <h1 style={{textAlign: 'center'}}> Internet Of Things </h1>
        <div className="cardAllign">
      
        {this.state.iot.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '200px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
        <img src={iot} alt="iot" weight="300px" height="100px"/>

              <p> {obj.pname} </p>
              <p> {obj.category} </p>
              <p> {obj.demoVideoUrl} </p>   
              <p> {obj.hostUrl} </p>   
              <p> {obj.exeUrl} </p>   
              <p> {obj.cost} </p>   
              
            </div>
            </Card>
          )
        })}
      </div>
      </div>
 
    )
  }
}
