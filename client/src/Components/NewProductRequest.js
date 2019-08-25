import React,{Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Slider3 from './slider3';


export default class NewProductRequest extends Component{

constructor(){
    super();
    
this.state={
    description: '',
    category: ''
}
this.getCategory = this.getCategory.bind(this);
this.getDescription = this.getDescription.bind(this);
this.gotoNewProductRequest = this.gotoNewProductRequest.bind(this);
}

getCategory(e){
this.setState({category: e.target.value});
}

getDescription(e){
this.setState({description: e.target.value});
}
    

gotoNewProductRequest(e){

    e.preventDefault();

var customerNewRequest = {
    cusNewReqId: this.props.match.params.cusNewReqId,
    newSoftwareDescription: this.state.description,
    category: this.state.category
}

    axios.post('https://sbay-mrz.herokuapp.com/newRequest/postnew',customerNewRequest)
    .then(res => {
        console.log("new req",res.data);
      }).catch(console.log("errr"))
      ;
}

    render(){
        console.log("customer", this.props.match.params.cusNewReqId,"product",this.props.match.params.productId)
    return(
        <div className="newpro">
<Slider3/>

<h3 className="NHeadI"> What Service Are You Looking For? </h3>
<hr/>
<div className="container"> 
 <Card>
 <p className="NHead">  Describe the service you're looking to purchase - please be as detailed as possible:</p>
                <form onSubmit={this.gotoNewProductRequest} method="post">
  <div class="form-group form-elements newreq">
  
   <span className="newIcon" > <i class="fas fa-file-alt fa-2x"></i></span>
    <textarea 
    class="form-control texNe"
     id="exampleInput"
      aria-describedby="emailHelp"
       placeholder="Enter description"
        onChange={this.getDescription}
        />
  </div>
<hr/>
<p className="NHead">  Choose a Catgeory:</p>
  <div class="form-group form-elements newreq op">
 

  <span className="newIcon"><i class="fas fa-folder-open fa-2x"></i></span>
    <select class="form-control" onChange={this.getCategory}> 
        <option value=""> select category </option>
        <option value="Android"> Android app</option>
        <option value="Ar/Vr">  AR/VR </option>
        <option value="Ecommerce"> Ecommerce </option>
        <option value="Iot"> Iot </option>
        <option value="Ai"> AI </option>
    
        
    </select>

<hr/>
      </div>

      <p className="NHead"> What is the budget for this service ? </p>
      <div className="form-group form-elements newreq"> 
          
  <span className="newIcon"><i class="fas fa-hand-holding-usd fa-2x"></i></span>
  <div class="form-group">
  
  <input type="number" class="form-control" id="exampleFormControlInput1"/>
</div>

      </div>


 <div className="btnN"> <button class="btn btn-primary"> submit </button></div>
  <span>

  </span>
</form>
</Card>
</div>
        </div>
    )
}
}