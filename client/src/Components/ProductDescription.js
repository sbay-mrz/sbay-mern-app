import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import Slider3 from './slider3';
export default class ProductDescription extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            sellerProfile: [],
            showSeller: false
        }
    }

    componentDidMount(){
    // var url = "http://localhost:7000/products/5bfbc91839d2532708fe0ecd";


        // var url = new URL("http://localhost:7000/products/5bfbc91839d2532708fe0ecd");
        // params ={param: this.props.match.params.myid};

// fetch(url, {param: this.props.match.params.myid}).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
        axios.get(`https://sbay-mrz.herokuapp.com/products/${this.props.match.params.myid}`)
        .then(res => {
          const products = res.data;
          console.log(products);
          this.setState({ products });
        })
    }

    getSeller(){        
      let sellerId = this.state.products.seller_id;
      console.log("seller id",sellerId)
      axios.get(`https://sbay-mrz.herokuapp.com/sellers/${sellerId}`)
      .then(res => {
        const sellerProfile = res.data;
        this.setState({ 
          sellerProfile,
        showSeller: !this.state.showSeller });
      })
    }

    render(){
        const {products,sellerProfile} = this.state;
        return(
            <div>
                <Slider3/>
               <Grid>
  <Row>

    <Col xs={4} sm ={12} md={4} lg={8}>
    <Card >
    <img src={products.screenShot} alt="description" width="100%" />
      <CardActionArea>
        <CardContent>
            <div>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={4}> 
    
    <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            
              <p> {products.cost} </p> 
            <p> name    :   {products.pname} </p> 
            <p> category :   {products.category} </p>             
            <div className="centerCart"> 
            <br/><br/>
    
</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>

 <Button onClick={this.getSeller.bind(this)}> seller info </Button>

        
{this.state.showSeller &&  
      <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            <h2> Seller Profile</h2>
            <p> name      :  {sellerProfile.name} </p> 
            <p> contact   :   {sellerProfile.contact} </p> 
            <p> address   : {sellerProfile.address}  </p>
            <div className="centerCart"> 
            <br/><br/>

</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
}
</Col>
    </Row>
</Grid>


            </div> 
        )
    }
}

