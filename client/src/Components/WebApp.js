
import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import Header2 from './Header2';
import webappimage from '../../src/assets/webappimage.png';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';



export default class WebApp extends Component {
  constructor(){
    super();
    this.state = {
        webproducts: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/webproducts`)
.then(res => {
  const webproducts = res.data;
  console.log(webproducts);
  this.setState({ webproducts });
  
})

}

  render() {
    return (
      <div>
        <Slider3/>
            <h1 style={{textAlign: 'center'}}> web app </h1> 
      <div className="cardAllign">
  
        {this.state.webproducts.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '250px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
              <img src={obj.screenShot} alt="webapp" weight="300px" height="100px"/>
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
