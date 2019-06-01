import React,{ Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col,Modal} from 'react-bootstrap';
import profile from '../../src/assets/profile.jpg';
import Header2 from './Header2';
import Slider3 from './slider3';


 class SellerProducts extends Component{

    constructor(){
        super();
        this.state = {
            sellerProducts: [],
            seller_id:'',
            pname: '',
            category: '',
            pdescription: '',
            demovideourl: '',
            exeUrl: '',
            hostUrl: '',
            cost: '',
            val: '',
            editable: false,
            proid: '',
            show: false,
            mynewimg: '',
            index: 0
        }
        // this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
      
        const { spid } = this.props.match.params;
      
        axios.get(`http://localhost:7000/products/getSellerProducts/${spid}`)
        .then(res =>{
      
            console.log(res.data);
            const user = res.data;
            console.log("users",user)
            this.setState({ 
              sellerProducts: user ,
              mynewimg: this.state.sellerProducts.screenShot});
        })  
       
    }

editProduct(id,index){
    this.setState({ 
      editable: !this.state.editable, 
      proid: id,
      show: true,
    index: index})
}

updatePro(){
  const {index} = this.state;
    let userObject = {
         pname: this.state.pname,
        pdescription: this.state.pdescription,
        exeUrl: this.state.exeUrl,
        demoVideoUrl: this.state.demoVideoUrl,
        hostUrl: this.state.hostUrl,
        cost: this.state.cost,
        screenShot: this.state.sellerProducts[0].screenShot,
        category: this.state.category
      }
    axios.patch(`http://localhost:7000/products/${this.state.proid}`,userObject)
    .then(res =>{
        console.log(res.data);
        const user = res.data;
        console.log("users",user)
    })  
    this.setState({editable : !this.state.editable})
    this.props.history.goBack()

}



getName(e){
    this.setState({pname: e.target.value});
  }

  getDescription(e){
    this.setState({pdescription: e.target.value});
  }

  
  getCost(e){
   this.setState({cost: e.target.value});
 }

 getDemoVideoUrl(e){
   this.setState({demovideourl: e.target.value});
 }

 
 getExeUrl(e){
   this.setState({exeUrl: e.target.value});
 }

 getHostUrl(e){
   this.setState({hostUrl: e.target.value});
 }

 getCategory(e){
   console.log(e.target.value);
   this.setState({category: e.target.value});
 }

 handleClose() {
  this.setState({ show: false });
}

deleteProduct(id){
  axios.delete(`http://localhost:7000/products/${id}`)
  .then(res => {
      console.log("res",res)
  })
  this.props.history.goBack()

}

// handleShow() {
//   this.setState({ show: true });
// }


render(){
    const {sellerProducts,index} = this.state;
    return(
        <div>
            <Slider3/>
       <Grid>
       {!this.state.editable &&
  <Row>

    <Col xs={12} sm ={6} md={4} lg={12}>
    <Card>
      <CardActionArea>
        <CardContent>
       {sellerProducts.map((obj,index)=>{
           return(
            <div className="icons">
            <p>   <img src={obj.screenShot} width="80%" height="60%"/> </p> 
            <p>     {obj.pname} </p> 
            <p>     {obj.cost} </p> 
            <p>     {obj.category} </p> 
            <p> <Button onClick={this.editProduct.bind(this,obj._id,index)}> edit </Button> </p>
            <p> <Button onClick={this.deleteProduct.bind(this,obj._id)}> delete product </Button></p>
            </div>
           )
       })}
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>  
    </Row>
       }

    
    {this.state.editable &&
    <div>
                <h2> Edit product </h2>
              <form method="post" onSubmit={this.postProduct}>
              <Row> 

          <Col> 

        
          <div class="form-group">
          <p>   <img src={this.state.sellerProducts[index].screenShot} width="80%" height="60%"/> </p> 

    <label for="name">product name:</label>
    <input type="name" class="form-control" id="name" value={this.state.pname} onChange={this.getName.bind(this)}/>
  </div>
 
  <div class="form-group">
    <label for="exeUrl">exeUrl:</label>
    <input type="text" class="form-control" id="exeUrl" value={this.state.exeUrl} onChange={this.getExeUrl.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="demovideourl">demovideourl:</label>
    <input type="text" class="form-control" id="demovideourl" value={this.state.demoVideoUrl} onChange={this.getDemoVideoUrl.bind(this)}/>
  </div>
          </Col>

          
          <Col> 
          <div class="form-group">
    <label for="hostUrl">hostUrl:</label>
    <input type="text" class="form-control" id="hostUrl" value={this.state.hostUrl} onChange={this.getHostUrl.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="cost">cost:</label>
    <input type="text" class="form-control" id="cost" value={this.state.cost} onChange={this.getCost.bind(this)}/>
  </div>

  <div class="form-group">
    <label for="pdescription">pdescription:</label>
    <input type="text" class="form-control" id="pdescription" value={this.state.pdescription} onChange={this.getDescription.bind(this)}/>
  </div>
          </Col>

              </Row>

 
              <div class="form-group">
    <label for="category">category:</label> <br/>
    <select value={this.state.category} onChange={this.getCategory.bind(this)}> 
    <option value=""> Select a Category </option>
        <option value="Web App"> web app </option>
        <option value="Android App"> Android App </option>
        <option value="Ios App"> Ios App </option>
        <option value="Android/Ios App"> Android/Ios App </option>
        <option value="VR"> VR </option>
        <option value="AR"> AR </option>
        <option value="AI"> AI </option>
        <option value="Ecommerce"> Ecommerce </option>
        <option value="IOT"> IOT </option>
        </select>
  </div>

  <p> <Button onClick={this.updatePro.bind(this)}> update </Button> </p>

 
</form>
</div>
    }
</Grid>
        </div> 
    )
}

}

export default SellerProducts;