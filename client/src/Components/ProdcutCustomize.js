import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import '../index.css';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/PostActions';



 class ProductCustomize extends Component {
    constructor(props){
        super(props); 
    this.state={
        description: '',
        category: '',
        budget: ''
    }
    this.getCategory = this.getCategory.bind(this);
    this.CustomizeProductRequest = this.CustomizeProductRequest.bind(this);
    }
    
    getCategory(e){
    this.setState({category: e.target.value});
    }
    
    getDescription(e){
    this.setState({description: e.target.value});
    console.log(e.target.value)
    }
    
    getBudget(e){
        this.setState({ budget: e.target.value})
    }

componentDidMount(){
    console.log(this.props.match.params.prodID);
}

CustomizeProductRequest(e){
    
    e.preventDefault();

    let customer =JSON.parse(localStorage.getItem('userProfile'));
    let cusid = customer._id;

    var CustomizeCustomizeRequest = {
        cuzDescription: this.state.description,
        productId: this.props.match.params.prodID,
        cusCuzReqId: cusid
    }

console.log(CustomizeCustomizeRequest);
    axios.post("https://sbay-mrz.herokuapp.com/customRequest/postcustom",CustomizeCustomizeRequest)
    .then(res => {
        console.log("new req",res.data);
      }).catch();
}
 
    render(){
        return(
            <div>

             <div className="container"> 
 <h3> Customize Product </h3>
 <Card>
                <form onSubmit={this.CustomizeProductRequest} method="post">
  <div class="form-group form-elements">
  
    <i class="fas fa-file-alt fa-3x"></i>
    <textarea 
    class="form-control"
     id="exampleInput"
      aria-describedby="emailHelp"
       placeholder="Enter description"
        onChange={this.getDescription.bind(this)}
        />
  </div>
<hr/>

</form>

</Card>
<button class="btn btn-primary" type="submit"> submit </button>

</div>



            </div> 
        )
    }
}



export default ProductCustomize;