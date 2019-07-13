import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import mobileapp from '../../src/assets/mobileapp.png';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';



export default class MobileApp extends Component {
  constructor(){
    super();
    this.state = {
        androidproducts: []
    }
}


componentDidMount(){

axios.get(`https://sbay-mrz.herokuapp.com/products/androidproducts`)
.then(res => {
  const androidproducts = res.data;
  console.log(androidproducts);
  this.setState({ androidproducts });
  
})

}
  render() {
    return (

      <div>
  <Slider3/>
           <h1 style={{textAlign: 'center'}}> Mobile App</h1>
      <div className="cardAllign">
           {this.state.androidproducts.map((obj)=>{
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

