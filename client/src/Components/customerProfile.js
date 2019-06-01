import React,{component, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import Slider3 from './slider3';
import Products from './Products';
import '../App.css';
 class customerProfile extends Component{

    constructor(){
        super();
        this.state = {
            customerProfile: {}
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        axios(`http://localhost:7000/customers/${id}`)
        .then(res =>{
            const user = res.data;
            this.setState({ customerProfile: user });
        })
    }

render(){
    const {customerProfile} = this.state;
    return(
     <div className="cProfileParent">
     <Slider3/>
     <div className="cProfileContainer">
     
         <div className="c-profile-div-one">
            <div className="c-profile-div-one-1">
                {/* <img src="#" alt="#"/>*/}
                 <h3> {customerProfile.name} </h3> 
                 
                 <Link to={`/newProductRequest/${customerProfile._id}`} > <button type="button" class="btn btn-primary btn-lg abc">Post Your Product Request</button> </Link>
            </div>
            <div className="c-profile-div-one-2">
               {/**/} <div>
                    <span><i class="fas fa-address-card"></i></span>
                    <span><i class="fas fa-envelope"></i></span>
                    <span><i class="fas fa-mobile-alt"></i></span>
                </div>
                 <div>
                 <p> Address </p> 
            
                    <p> email </p> 
                     <p> contact </p> 
                 </div>
             </div>
            <div className="c-profile-div-one-3">
              <p> {customerProfile.address} </p> 
              <p> {customerProfile.email} </p> 
                 <p> {customerProfile.contact} </p> 
                <p> <Link to={`/Myrequests/${customerProfile._id}`}> my requests </Link> </p>
            </div>
         </div>
         <br/>
         <div className="c-profile-div-two">
            <div><h1>Your Products</h1></div>
             <Products/>
         </div>
     </div>
       {/* <slider3/>
       <Grid>
  <Row className="show-grid">

    <Col xs={4} sm ={12} md={4} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
            <img src="" alt="user"/>
            <p> {customerProfile.sname} </p> 
            <p> {customerProfile.address} </p> 
            <p> {customerProfile.email} </p> 
            <p> {customerProfile.contact} </p> 
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={8}> 
    <CardActionArea>
        <CardContent >
            <div className="icons">
            <p> {customerProfile.name} </p> 
            <Link to={`/newProductRequest/${customerProfile._id}`}> request for new product </Link>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Col>
    </Row>
       </Grid>*/}
        </div> 
    )
}

}

export default customerProfile