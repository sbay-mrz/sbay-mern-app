import React, { Component } from 'react'
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import {Grid,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class CategoriesList extends Component {
  render() {
    return (
      <div className="main-category-head">

     
      <div className="card-heading"><h1> Product Categories</h1></div>
     
       <Grid style={{paddingBottom: '1em'}}>
      
  <Row>
    
  


    <Col xs={4} sm ={4} md={4} lg={4}>
    
    <Link to="/mobileapp"> 
    <Card>
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent >
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fa fa-mobile-alt fa-stack-1x"></i>
</span>
<p> Mobile App </p>
</div > 

        </CardContent>
      </CardActionArea>
 
    </Card>
    </Link>

    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="webapp"> 
    <Card>
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
<div className="icons"> 
        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fab fa-chrome fa-stack-1x"></i>
</span>
<p> Web Apps</p>
</div>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Link>
    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="vrar"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fas fa-vr-cardboard fa-stack-1x"></i>
</span>
<p> Ar/Vr </p>
</div>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Link>
    </Col>
  
  </Row>
  </Grid>



       <Grid>
  <Row className="show-grid">
    
  

    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="artificialintelligence"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fas fa-brain fa-stack-1x"></i>
</span>
<p> AI</p>
</div>
        </CardContent>
      </CardActionArea>
   
    </Card>
    </Link>
    </Col>


    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="ecommerce"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fas fa-cart-plus fa-stack-1x"></i>
</span>
<p> E-Commerce </p>
</div>
        </CardContent>
      </CardActionArea>

    </Card>
    </Link>
    </Col>
    

    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="internetofthings"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  <i class="fa fa-circle fa-stack-2x icon-background"></i>
  <i class="fas fa-code-branch fa-stack-1x"></i>
</span>
<p> IOT </p>
</div>

        </CardContent>
      </CardActionArea>

    </Card>
    </Link>
    </Col>
   
  </Row>
  </Grid>
  </div>
     
      
    )
  }
}
