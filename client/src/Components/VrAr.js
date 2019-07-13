import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import vrar from '../../src/assets/vrar.jpg';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';



export default class VrAr extends Component {
  constructor(){
    super();
    this.state = {
        vrar: []
    }
}


componentDidMount(){

axios.get(`https://sbay-mrz.herokuapp.com/products/vrar`)
.then(res => {
  const vrar = res.data;
  console.log(vrar);
  this.setState({ vrar });
  
})

}
  render() {
    return (

      <div>
        <Slider3/>
         <h1 style={{textAlign: 'center'}}> vr / ar</h1>
      <div className="cardAllign">
        {this.state.vrar.map((obj)=>{
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
