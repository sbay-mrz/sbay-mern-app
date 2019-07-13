import React,{ Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import profile from '../../src/assets/profile.jpg';
import Header2 from './Header2';
import Slider3 from './slider3';
import auth from './Auth';
import Products from './Products';
import {resetUserToken} from './../actions/PostActions';
import {connect} from 'react-redux';


 class sellerProfile extends Component{

    constructor(){
        super();
        this.state = {
            sellerProfile: {},
            image: '',
            updateSeller: false,
            name: '',
            email: '',
            contact: '',
            address: ''
        }
    }

    componentDidMount(){
      var user= JSON.parse(localStorage.getItem('userProfile'));
      // console.log(user._id);
      if(!localStorage.getItem('userProfile')){
        this.props.history.push('/sellerLogin')
      }

      
        const { id } = this.props.match.params;
        axios.get(`https://sbay-mrz.herokuapp.com/sellers/${id}`)
        .then(res =>{
            console.log(res.data);
            const user = res.data;
            console.log("users",user)
            this.setState({ sellerProfile: user });




            if(this.state.image !== ''){
                let userObject = {
                    name: this.state.sellerProfile.name,
                    email: this.state.sellerProfile.email,
                    password: this.state.sellerProfile.password,
                    contact: this.state.sellerProfile.contact,
                    address: this.state.sellerProfile.address,
                    // image: this.state.image
                  }
                  axios.patch(`https://sbay-mrz.herokuapp.com/sellers/${id}`,userObject)
                  .then(res =>{
                      console.log(res.data);
                      const user = res.data;
                      console.log("users",user)
                  })  
            }
        })  
    }
//     getSellerImage(event){
//         const { id } = this.props.match.params;

// alert("hello")
//         var CLOUDINARY_URL ="https://api.cloudinary.com/v1_1/chohan/upload";
//         var CLOUDINARY_UPLOAD_PRESET="bhorijjp";
      
//       var file = event.target.files[0];
//       var formData = new FormData();
//       formData.append('file',file);
//       formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
      
      
//       axios({
//       url: CLOUDINARY_URL,
//       method: 'POST',
//       data: formData
//       }).then(res => {
//       console.log("my response",res);
//       this.setState({ image: res.data.secure_url})
//       }).catch(function(err){
//       console.log(err)
//       })

    
//     }

logout(){
    auth.login(() => {
        this.props.history.push("/");
localStorage.removeItem('userProfile');

      });
}

updateSeller(){
    this.setState({ updateSeller: !this.state.updateSeller})
}

getName(e){
    this.setState({name: e.target.value});
  }

  getAddress(e){
    this.setState({address: e.target.value});
  }

  getEmail(e){
    this.setState({email: e.target.value});
  }

  getContact(e){
    this.setState({contact: e.target.value});
  }

  updatePro(){
    alert('hello');
    const { id } = this.props.match.params;

      let userObject = {
           name: this.state.name,
          address: this.state.address,
          contact: this.state.contact,
          email: this.state.sellerProfile.email,
          password: this.state.sellerProfile.password
        }
      axios.patch(`https://sbay-mrz.herokuapp.com/sellers/${id}`,userObject)
      .then(res =>{
          console.log(res.data);
          const user = res.data;
          console.log("users",user)
      })  
      this.setState({updateSeller : !this.state.updateSeller})
      window.location.reload();

  }

render(){
    const {sellerProfile} = this.state;
    return(
        <div>
         {!this.state.updateSeller &&
               <div> 
            <Slider3/>
       <Grid>
  <Row>

    <Col xs={12} sm ={6} md={4} lg={4}>
    <Card>
    {/* <input id="file-upload" type="file" /> */}
      <CardActionArea>
        <CardContent>
            <div className="icons">
            {/* <input type="file" class="form-control" onChange={this.getSellerImage.bind(this)}/> */}
            <img src={profile} alt="user" id='image-preview' />
            <p> name    :   {sellerProfile.name} </p> 
            <p> Address :   {sellerProfile.address} </p> 
            <p> Email   :   {sellerProfile.email} </p> 
            <p> Contact :   {sellerProfile.contact} </p> 
            
            <Link to={`/sellerProducts/${sellerProfile._id}`}> my product </Link>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    <Col xs={12} sm ={6} md={4} lg={8}> 
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">

            <h1> Wellcome {sellerProfile.name} </h1>
            
            <Link to={`/postproduct/${sellerProfile._id}`}> Add post </Link> 
            <Button onClick={this.logout.bind(this)}>  logout </Button>
            <Button onClick={this.updateSeller.bind(this)}>  edit profile </Button>
            
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>
</Grid>
{/* 
         <div>
            <div><h1>Your Products</h1></div>
             <Products/>
         </div> */}
</div>

         }

{this.state.updateSeller && 

  <div> 
        <h2> Edit Seller </h2>

    <div className="Edit-Seller">
  <form method="post" >
  <Row> 

<Col> 

<div class="form-group">
{/* <p>   <img src={this.state.sellerProducts[index].screenShot} width="80%" height="60%"/> </p>  */}

<label for="name">Name:</label>
<input type="name" class="form-control" id="name" value={this.state.name} onChange={this.getName.bind(this)}/>
</div>

<div class="form-group">
<label for="exeUrl">Address:</label>
<input type="text" class="form-control" id="address" value={this.state.address} onChange={this.getAddress.bind(this)}/>
</div>

<div class="form-group">
<label for="demovideourl">Contact :</label>
<input type="text" class="form-control" id="contact" value={this.state.contact} onChange={this.getContact.bind(this)}/>
</div>
</Col>
  </Row>
 <p> <Button onClick={this.updatePro.bind(this)}> update </Button> </p> 


</form>
</div>
</div>
}

        </div> 
    )
}

}

const mapStateToProps = (state,dispatch) => ({
status: state.posts.status
})

export default connect(mapStateToProps, {resetUserToken})(sellerProfile);
