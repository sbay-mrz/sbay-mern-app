import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import iot from '../../src/assets/iot.png';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';



export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
        iot: []
    }
}


componentDidMount(){

axios.get(`https://sbay-mrz.herokuapp.com/products/iot`)
.then(res => {
  const iot = res.data;
  console.log(iot);
  this.setState({ iot });
  
})

}
  render() {
 
    let {iot} = this.state;
    if(iot === undefined || iot == 0){
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
         <h1 style={{textAlign: 'center'}}> Internet Of Things </h1>
        <div className="cardAllign">
      
        {this.state.iot.map((obj)=>{
          return(
            <Card style={{textAlign: 'center', width: '300px', height: '350px',marginLeft: '15px'}}>
            <div> 
           
            <img src={obj.screenShot} alt="ai" width="100%" height="200px"/>
                  <p> {obj.pname} </p>
                  <p> {obj.category} </p>  
                  <p> {obj.cost} </p>   
                  <Link to={`/productDescription/${obj._id}`}>  Description </Link>  
                </div>
                </Card>
          )
        })}
      </div>
      </div>
 
    )
  }
}
