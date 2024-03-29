import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';




export default class ProductDescription extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            sellerProfile: [],
            showSeller: false,
            showLoader: true
        }
    }

    componentDidMount(){
      console.log("props",this.props.match.params.myid);
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
        if(this.state.products){
          this.setState({showLoader: !this.state.showLoader})
        }
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


customize(){
  
  let userProfile = JSON.parse(localStorage.getItem('userProfile'));
  // let id = userProfile._id;
  if(userProfile){
    this.props.history.push(`/productCustomize/${this.props.match.params.myid}`)
  }
  else{
    alert("login as customer to contine")
  }
  
}




    render(){

      let {products,sellerProfile} = this.state;
      if(products === undefined || products == 0){
        return (
    
            <div style={{display: 'flex',justifyContent: 'center',marginTop: '200px'}}>
  <Loader type="ThreeDots" color="#057DB5" height={150} width={80} />
                </div>
                )
    }
    else

        return(
            
          
            <div>
                <Slider3/>
              
  

    <section className="productdescriptP">
    <div className="ParentP">
    <div className="productdescript"><img src={products.screenShot} alt="description" width="100%" height="100%" />
    </div>
   
 <div className="button-pro">
 <Button onClick={this.getSeller.bind(this)}> seller info </Button>
 <Button onClick={this.customize.bind(this)}> apply for customization </Button>

        
{this.state.showSeller &&  
      <Card >
      <CardActionArea>
        <CardContent >
              <div className="sell">
            <h2> Seller Profile</h2>
            <p> name      :  {sellerProfile.name} </p> 
            <p> contact   :   {sellerProfile.contact} </p> 
           {/*<p> address   : {sellerProfile.address}  </p>*/} 
            <div className="centerCart"> 
            <br/><br/>

            </div>
            </div>
        </CardContent>
      </CardActionArea>
     
    </Card>
}
 </div>

 </div>
    
    
    
    
    
             <div className="productdescriptoneP">
             <div className="productdescriptone">
           {/*  <div>
             <p>Cost:  </p> 
           <p> Name    :    </p> 
           <p> Category :   </p>
          
           <p> Description :    </p>
          </div>*/}
          <div>
         {/* <p> Cost:{products.cost} </p> */}
          <p>  Name:   {products.pname} </p> 
          <p>   Category :{products.category} </p>
        
          <p>  Description: {products.pdescription} </p>
          </div>
           <div className="centerCart"> 
           <br/><br/>
   
           </div>
           </div>
           <div className="productdescripttwo">
           <p>Exe URL :<Link to="/"> {products.exeUrl}   </Link></p>
           <p> Demo Video : <Link to="/">  {products.demoVideoUrl} </Link></p>             
         <p> Host URL : <Link to="/">  {products.hostUrl}  </Link></p>
          
           </div>
             </div>
      </section>



    



  
            </div> 
        )
    }
}

