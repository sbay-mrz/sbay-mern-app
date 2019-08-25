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
    <Card className="cate-box cate-two">
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent >
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  
  <i class="fa fa-mobile-alt fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> MOBILE APP </p>
</div > 

        </CardContent>
      </CardActionArea>
     
    </Card>
    </Link>

    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="webapp"> 
    <Card className="cate-box cate-three">
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
<div className="icons"> 
        <span class="fa-stack fa-3x">
  
  <i class="fab fa-chrome fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> WEB APPS</p>
</div>
        </CardContent>
      </CardActionArea>
 
    </Card>
    </Link>
    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="vrar"> 
    <Card className="cate-box cate-four">
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
    <i class="fas fa-vr-cardboard fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> AR/VR </p>
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
    <Card className="cate-box cate-five">
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  
  <i class="fas fa-brain fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> AI</p>
</div>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Link>
    </Col>


    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="ecommerce"> 
    <Card className="cate-box cate-six">
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  
  <i class="fas fa-cart-plus fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> E-COMMERCE </p>
</div>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Link>
    </Col>
    

    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="internetofthings"> 
    <Card className="cate-box cate-one" >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons"> 

        <span class="fa-stack fa-3x">
  
  <i class="fas fa-code-branch fa-stack-1x cate-icon-color"></i>
</span>
<p className="cate-para"> IOT </p>
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
