import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import ai from '../../src/assets/ai.jpg';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';


export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
      ai: []
    }
}


componentDidMount(){

axios.get(`https://sbay-mrz.herokuapp.com/products/ai`)
.then(res => {
  const ai = res.data;
  console.log(ai);
  this.setState({ ai });
  
})

}
  render() {
    return (
        <div>
         <Slider3/>
          <h1 style={{textAlign: 'center'}}> Artificial Intelligence </h1> 
        <div className="cardAllign">
        
        {this.state.ai.map((obj)=>{
          return(
        <Card style={{textAlign: 'center', width: '300px', height: '250px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
       
        <img src={obj.screenShot} alt="ai" width="300px" height="100px"/>
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
