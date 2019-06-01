import React,{ Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import profile from '../../src/assets/profile.jpg';
import Header2 from './Header2';
import Slider3 from './slider3';
import auth from './Auth';



 class sellerProfile extends Component{

    constructor(){
        super();
        this.state = {
            sellerProfile: {},
            image: ''
        }
    }

    componentDidMount(){
        
        const { id } = this.props.match.params;
        axios.get(`http://localhost:7000/sellers/${id}`)
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
                  axios.patch(`http://localhost:7000/sellers/${id}`,userObject)
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
        this.props.history.push("/sellerLogin");
      });
}
render(){
    const {sellerProfile} = this.state;
    return(
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
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>
</Grid>
        </div> 
    )
}

}

export default sellerProfile